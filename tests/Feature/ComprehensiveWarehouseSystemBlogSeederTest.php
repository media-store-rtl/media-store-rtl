<?php

namespace Tests\Feature;

use App\Models\Blog;
use App\Models\Image;
use App\Models\Menu;
use App\Models\User;
use Database\Seeders\ComprehensiveWarehouseSystemBlogSeeder;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\DB;
use Tests\TestCase;

class ComprehensiveWarehouseSystemBlogSeederTest extends TestCase
{
    use RefreshDatabase;

    public function test_it_creates_the_warehouse_article_in_the_expected_blog_category_with_an_image(): void
    {
        $user = User::factory()->create();

        $sectionId = DB::table('sections')->insertGetId([
            'user_id' => $user->id,
            'name' => 'blogs',
            'status' => 4,
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        $group = Menu::query()->create([
            'user_id' => $user->id,
            'parent_id' => null,
            'name' => 'راهنمای کاربردی',
            'status' => 4,
        ]);

        $type = Menu::query()->create([
            'user_id' => $user->id,
            'parent_id' => $group->id,
            'name' => 'آموزشی',
            'status' => 4,
        ]);

        $group->sections()->attach($sectionId);
        $type->sections()->attach($sectionId);

        $this->seed(ComprehensiveWarehouseSystemBlogSeeder::class);

        $blog = Blog::query()->where('slug', 'samaneh-jame-anbarha-guide')->firstOrFail();

        $this->assertSame($group->id, (int) $blog->group);
        $this->assertSame($type->id, (int) $blog->type);
        $this->assertSame(4, (int) $blog->status);
        $this->assertStringContainsString('سامانه جامع انبارها', $blog->text);

        $this->assertDatabaseHas('images', [
            'imageable_type' => Blog::class,
            'imageable_id' => $blog->id,
            'user_id' => $user->id,
            'url' => '/images/samaneh-jame-anbarha.svg',
            'status' => 4,
        ]);

        $this->assertDatabaseHas('menuables', [
            'menu_id' => $group->id,
            'menuable_id' => $blog->id,
            'menuable_type' => Blog::class,
        ]);

        $this->assertDatabaseHas('menuables', [
            'menu_id' => $type->id,
            'menuable_id' => $blog->id,
            'menuable_type' => Blog::class,
        ]);
    }

    public function test_running_the_seeder_twice_does_not_duplicate_the_article_or_its_image(): void
    {
        $user = User::factory()->create();

        $sectionId = DB::table('sections')->insertGetId([
            'user_id' => $user->id,
            'name' => 'blogs',
            'status' => 4,
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        $group = Menu::query()->create([
            'user_id' => $user->id,
            'parent_id' => null,
            'name' => 'راهنمای کاربردی',
            'status' => 4,
        ]);

        $type = Menu::query()->create([
            'user_id' => $user->id,
            'parent_id' => $group->id,
            'name' => 'آموزشی',
            'status' => 4,
        ]);

        $group->sections()->attach($sectionId);
        $type->sections()->attach($sectionId);

        $seeder = app(ComprehensiveWarehouseSystemBlogSeeder::class);
        $seeder->run();
        $seeder->run();

        $this->assertSame(1, Blog::query()->where('slug', 'samaneh-jame-anbarha-guide')->count());
        $blog = Blog::query()->where('slug', 'samaneh-jame-anbarha-guide')->firstOrFail();
        $this->assertSame(1, Image::query()
            ->where('imageable_type', Blog::class)
            ->where('imageable_id', $blog->id)
            ->count());
    }
}

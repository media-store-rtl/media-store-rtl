<?php
namespace App\Http\Utilities;


use App\Models\Sectionable;

class SectionableCreate
{
    public static function all($request)
    {
        $request->validate([
            'id' => 'required|numeric',
            'items' => 'required|array|min:1',
            'items.*.sectionable_type' => 'required|string',
            'items.*.sectionable_id' => 'required|numeric',
        ]);

        $sections = [];

        foreach ($request->items as $item) {

            $sections[] = Sectionable::updateOrCreate([
                'section_id' => $request->id,
                'sectionable_type' => $item['sectionable_type'],
                'sectionable_id' => $item['sectionable_id'],
            ]);

        }

        return $sections;
    }
    

    public static function del($request)
    {
        $sections = Sectionable::where('section_id',$request->id )->where('sectionable_type',$request->type)->where('sectionable_id',$request->del)->delete();

        return $sections;
    }
}

<?php
namespace App\Http\Utilities;

use App\Models\Menu;

class MenuCreate
{
    public static function all($request)
    {
        if ($request->id) {

            $request->validate([
                'parent_id' => 'nullable|numeric',
                'name' => 'required|string',
            ]);

            return Menu::find($request->id)->update([
                'user_id'   => auth()->user()->id,
                'parent_id' => $request->parent_id,
                'name'      => $request->name,
                'status'    => $request->status,
            ]);
        }

        $request->validate([
            'parent_id' => 'nullable|numeric',
            'name' => 'required|array|min:1',
            'name.*' => 'required|string',
        ]);

        $menus = [];

        foreach ($request->name as $name) {

            $name = trim($name);

            if ($name === '') {
                continue;
            }

            $menus[] = Menu::create([
                'user_id'   => auth()->user()->id,
                'parent_id' => $request->parent_id,
                'name'      => $name,
                'status'    => 4,
            ]);
        }

        return $menus;
    }
}

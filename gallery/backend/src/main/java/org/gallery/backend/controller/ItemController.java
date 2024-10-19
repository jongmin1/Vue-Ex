package org.gallery.backend.controller;

import org.gallery.backend.entity.Item;
import org.gallery.backend.repository.ItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class ItemController {
    @Autowired
    ItemRepository itemRepositoy;

    @GetMapping("/api/items")
    public List<Item> getItems(){
        List<Item> items = itemRepositoy.findAll();


        return items;
    }
}


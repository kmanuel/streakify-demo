package com.streakify.backend.entry;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("entries")
public class StreakEntryController {

    private final StreakEntryDao streakEntryDao;

    public StreakEntryController(StreakEntryDao streakEntryDao) {
        this.streakEntryDao = streakEntryDao;
    }

    @GetMapping
    public List<StreakEntry> all() {
        return streakEntryDao.findAll();
    }

    @PostMapping
    public StreakEntry save(@RequestBody StreakEntry entry) {
        return streakEntryDao.save(entry);
    }

    @DeleteMapping("{id}")
    public void delete(@PathVariable("id") long id) {
        streakEntryDao.deleteById(id);
    }
}

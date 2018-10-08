package com.streakify.backend.streak;

import com.streakify.backend.remote.exception.NotFoundException;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

@RestController
@RequestMapping("streaks")
public class StreakController {

    private final StreakDao streakDao;

    public StreakController(StreakDao streakDao) {
        this.streakDao = streakDao;
    }

    @PostMapping
    public Streak save(@RequestBody Streak streak) {
        return streakDao.save(streak);
    }

    @GetMapping
    public Collection<Streak> all() {
        return streakDao.findAll();
    }

    @GetMapping("/{id}")
    public Streak get(@PathVariable("id") long id) {
        return streakDao.findById(id)
                .orElseThrow(NotFoundException::new);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable("id") long id) {
        streakDao.deleteById(id);
    }

}

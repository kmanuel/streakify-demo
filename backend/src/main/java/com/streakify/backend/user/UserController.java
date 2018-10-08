package com.streakify.backend.user;

import com.streakify.backend.remote.exception.NotFoundException;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

@RestController
@RequestMapping("users")
public class UserController {

    private final UserDao userDao;

    public UserController(UserDao userDao) {
        this.userDao = userDao;
    }

    @PostMapping
    public User save(@RequestBody User user) {
        return userDao.save(user);
    }

    @GetMapping
    public Collection<User> all() {
        return userDao.findAll();
    }

    @GetMapping("/{id}")
    public User get(@PathVariable("id") long id) {
        return userDao.findById(id)
                .orElseThrow(NotFoundException::new);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable("id") long id) {
        userDao.deleteById(id);
    }

}

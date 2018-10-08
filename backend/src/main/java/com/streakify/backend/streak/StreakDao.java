package com.streakify.backend.streak;

import org.springframework.data.jpa.repository.JpaRepository;

public interface StreakDao extends JpaRepository<Streak, Long> {

}

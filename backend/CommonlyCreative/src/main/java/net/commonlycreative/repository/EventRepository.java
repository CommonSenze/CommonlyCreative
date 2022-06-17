package net.commonlycreative.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import net.commonlycreative.models.Event;

@Repository
public interface EventRepository extends MongoRepository<Event, Long> {

}

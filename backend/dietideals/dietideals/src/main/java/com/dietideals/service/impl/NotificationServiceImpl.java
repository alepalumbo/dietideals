package com.dietideals.service.impl;

import com.dietideals.model.NotificationEntity;
import com.dietideals.repository.NotificationRepository;
import com.dietideals.service.NotificationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class NotificationServiceImpl implements NotificationService {

    private NotificationRepository notificationRepository;

    @Autowired
    public NotificationServiceImpl(NotificationRepository notificationRepository) {
        this.notificationRepository = notificationRepository;
    }

    @Override
    public NotificationEntity createNotification(NotificationEntity notificationEntity) {
        return notificationRepository.save(notificationEntity);
    }

    @Override
    public Optional<NotificationEntity> findOne(Long notificationId) {
        return notificationRepository.findById(notificationId);
    }
}

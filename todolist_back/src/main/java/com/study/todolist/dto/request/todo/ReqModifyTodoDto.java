package com.study.todolist.dto.request.todo;

import com.study.todolist.entity.Todo;
import lombok.Data;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

@Data
public class ReqModifyTodoDto {
    private int todoId;
    private int userId;
    private String title;
    private String content;
    private int important;
    private int busy;
    private int statue;
    private String todoDateTime;

    public Todo toEntity() {

//        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd'T'HH:mm:ss");
//        LocalDateTime todoDateTime = LocalDateTime.parse(dateTime + ":00", formatter);

        return Todo.builder()
                .todoId(todoId)
                .userId(userId)
                .title(title)
                .content(content)
                .important(important)
                .busy(busy)
                .status(statue)
                .todoDateTime(LocalDateTime.parse(todoDateTime))
                .build();
    }
}

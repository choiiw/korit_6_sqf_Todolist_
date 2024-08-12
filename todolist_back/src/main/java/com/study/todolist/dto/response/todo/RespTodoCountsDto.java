package com.study.todolist.dto.response.todo;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class RespTodoCountsDto {
    private int all;
    private int today;
    private int important;
    private int busy;
    private int complete;
}

"use client";

import { useState } from "react";
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  type DragEndEvent,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
  useSortable,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { actionRecommendations } from "@/data/mock";
import { ActionItem } from "./ActionItem";
import type { ActionRecommendation } from "@/types";

function SortableTodoItem({
  action,
  index,
  onRemove,
}: {
  action: ActionRecommendation;
  index: number;
  onRemove: () => void;
}) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: action.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      className={isDragging ? "opacity-50" : ""}
    >
      <ActionItem
        action={action}
        mode="todo"
        index={index}
        onToggle={onRemove}
        dragHandleProps={listeners as unknown as React.HTMLAttributes<HTMLElement>}
      />
    </div>
  );
}

export function ActionRecommendations() {
  const [todoIds, setTodoIds] = useState<string[]>([]);

  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 5 } }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const todoItems = todoIds
    .map((id) => actionRecommendations.find((a) => a.id === id))
    .filter((a): a is ActionRecommendation => a !== undefined);

  const inboxItems = actionRecommendations
    .filter((a) => !todoIds.includes(a.id))
    .sort((a, b) => b.impactScore - a.impactScore);

  function addToTodo(id: string) {
    setTodoIds((prev) => [...prev, id]);
  }

  function removeFromTodo(id: string) {
    setTodoIds((prev) => prev.filter((i) => i !== id));
  }

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;
    if (!over || active.id === over.id) return;

    setTodoIds((prev) => {
      const oldIndex = prev.indexOf(active.id as string);
      const newIndex = prev.indexOf(over.id as string);
      return arrayMove(prev, oldIndex, newIndex);
    });
  }

  return (
    <section className="space-y-4">
      <h2 className="text-base font-medium">Actions</h2>

      {/* Todo section */}
      {todoIds.length > 0 && (
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
              Todo
            </span>
            <span className="text-[10px] text-muted-foreground tabular-nums">
              {todoIds.length} planned
            </span>
          </div>
          <DndContext
            sensors={sensors}
            collisionDetection={closestCenter}
            onDragEnd={handleDragEnd}
          >
            <SortableContext
              items={todoIds}
              strategy={verticalListSortingStrategy}
            >
              <div className="space-y-2">
                {todoItems.map((action, index) => (
                  <SortableTodoItem
                    key={action.id}
                    action={action}
                    index={index}
                    onRemove={() => removeFromTodo(action.id)}
                  />
                ))}
              </div>
            </SortableContext>
          </DndContext>
        </div>
      )}

      {/* Inbox section */}
      {inboxItems.length > 0 && (
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
              Inbox
            </span>
            <span className="text-[10px] text-muted-foreground tabular-nums">
              {inboxItems.length} recommendations
            </span>
          </div>
          <div className="space-y-2">
            {inboxItems.map((action) => (
              <ActionItem
                key={action.id}
                action={action}
                mode="inbox"
                onToggle={() => addToTodo(action.id)}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}

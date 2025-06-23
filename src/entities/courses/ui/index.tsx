"use client"
import React from "react";

const mockCourse = {
  title: "Редактор курсу: Спеціаліст з легалізації (повний курс з нуля)",
  description: "Цей курс допоможе вам освоїти всі етапи легалізації з нуля до експерта.",
  structure: [
    { id: 1, name: "Вступ", status: "completed" },
    { id: 2, name: "Основи легалізації", status: "in-progress" },
    { id: 3, name: "Практичні завдання", status: "locked" },
    { id: 4, name: "Підсумковий тест", status: "locked" },
  ],
};

export default function CourseEditorPanel() {
  return (
    <div className="max-w-3xl mx-auto mt-8 bg-white rounded-xl shadow-lg p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-bold">{mockCourse.title}</h2>
          <p className="text-gray-500 text-sm">Редагуйте курс або змініть його структуру</p>
        </div>
        <button className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700">
          Опублікувати курс
        </button>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Course Description */}
        <div className="bg-gray-50 rounded-lg p-4">
          <h3 className="font-semibold mb-2">Опис курсу</h3>
          <textarea
            className="w-full h-32 p-2 border border-gray-300 rounded"
            defaultValue={mockCourse.description}
          />
        </div>

        {/* Course Structure */}
        <div className="bg-gray-50 rounded-lg p-4">
          <h3 className="font-semibold mb-2">Структура курсу</h3>
          <ul>
            {mockCourse.structure.map((item) => (
              <li
                key={item.id}
                className={`flex items-center justify-between p-2 rounded mb-2 ${
                  item.status === "completed"
                    ? "bg-green-100"
                    : item.status === "in-progress"
                    ? "bg-yellow-100"
                    : "bg-gray-200"
                }`}
              >
                <span>{item.name}</span>
                <span className="text-xs text-gray-500">{item.status}</span>
              </li>
            ))}
          </ul>
          <button className="mt-2 w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            + Додати розділ
          </button>
        </div>
      </div>
    </div>
  );
}





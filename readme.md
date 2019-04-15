# JavaDeveloperProgrammingBasics_Lesson-04
Functions, functional expressions

* [Завдання 1](https://github.com/AlexeyDolgov/JavaDeveloperProgrammingBasics_Lesson-04/blob/master/JavaDeveloperProgrammingBasics_Lesson-04/task4_1/task4_1.js)<br>
Наступна функція повертає `true`, якщо параметр `age` більше `18`. В іншому випадку вона повертає `false`.

       function checkAge(age) {
	        if (age > 18) {
		        return true;
	        } else {
		        return false;
	        }
       }

  Перепишіть функцію, щоб вона робила те ж саме, але без `if`, в один рядок. Зробіть два варіанти функції `checkAge`:
  - Використовуючи оператор `?`
  - Використовуючи оператор `||`

* [Завдання 2](https://github.com/AlexeyDolgov/JavaDeveloperProgrammingBasics_Lesson-04/blob/master/JavaDeveloperProgrammingBasics_Lesson-04/task4_2/task4_2.js)<br>
Напишіть функцію `min(a, b)`, яка повертає менше з чисел `a`, `b`.
  
       min(2, 5) // 2
       min(3, -1) // -1
       min(1, 1) // 1

* [Завдання 3](https://github.com/AlexeyDolgov/JavaDeveloperProgrammingBasics_Lesson-04/blob/master/JavaDeveloperProgrammingBasics_Lesson-04/task4_3/task4_3.js)<br>
Напишіть функцію `pow(x, n)`, яка повертає `x` в ступені `n`. Інакше кажучи, множить `x` на себе `n` разів і повертає результат.

       pow(3, 2) = 3 * 3 = 9
       pow(3, 3) = 3 * 3 * 3 = 27
       pow(1, 100) = 1 * 1 * ... * 1 = 1

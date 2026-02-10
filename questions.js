// Question database - 100 questions per subject
window.QUESTIONS = {
    java: [
        // Java Basics (Questions 1-20)
        {
            question: "What is a variable in Java?",
            choices: ["A container that stores data", "A type of loop", "A method declaration", "A class modifier"],
            correct: 0,
            explanation: "A variable is a container that holds data values during program execution. It has a name, type, and value that can change."
        },
        {
            question: "Which of these is NOT a primitive data type in Java?",
            choices: ["int", "boolean", "String", "double"],
            correct: 2,
            explanation: "String is not a primitive type - it's a class (reference type). The primitive types are: byte, short, int, long, float, double, char, and boolean."
        },
        {
            question: "What does the '==' operator check when comparing objects?",
            choices: ["Content equality", "Reference equality", "Type equality", "Value equality"],
            correct: 1,
            explanation: "The '==' operator checks if two object references point to the same memory location (reference equality). Use .equals() to compare object content."
        },
        {
            question: "What is the purpose of the 'public static void main(String[] args)' method?",
            choices: ["To define variables", "The entry point of a Java program", "To create objects", "To import libraries"],
            correct: 1,
            explanation: "The main method is the entry point where the JVM starts executing the program. It must be public, static, and void with String[] parameter."
        },
        {
            question: "Which keyword is used to create an object in Java?",
            choices: ["create", "new", "object", "make"],
            correct: 1,
            explanation: "The 'new' keyword allocates memory for a new object and calls the constructor. Example: Student s = new Student();"
        },
        {
            question: "What is the difference between int and Integer?",
            choices: ["No difference", "int is primitive, Integer is a wrapper class", "Integer is faster", "int can be null"],
            correct: 1,
            explanation: "int is a primitive type that stores values directly. Integer is a wrapper class that allows int values to be treated as objects and can be null."
        },
        {
            question: "What does 'static' mean in a method declaration?",
            choices: ["The method never changes", "The method belongs to the class, not instances", "The method is private", "The method is final"],
            correct: 1,
            explanation: "A static method belongs to the class itself rather than instances. It can be called without creating an object: ClassName.methodName()."
        },
        {
            question: "What is a constructor in Java?",
            choices: ["A special method to destroy objects", "A special method to initialize objects", "A type of variable", "A loop structure"],
            correct: 1,
            explanation: "A constructor is a special method with the same name as the class, used to initialize objects when they're created with 'new'."
        },
        {
            question: "Which access modifier makes a variable accessible only within its own class?",
            choices: ["public", "protected", "default", "private"],
            correct: 3,
            explanation: "The 'private' modifier restricts access to within the same class only. It's the most restrictive access level."
        },
        {
            question: "What is method overloading?",
            choices: ["Calling too many methods", "Multiple methods with same name but different parameters", "Making methods too long", "Using too many variables"],
            correct: 1,
            explanation: "Method overloading allows multiple methods in the same class with the same name but different parameter lists (number, type, or order of parameters)."
        },
        {
            question: "What does the 'this' keyword refer to?",
            choices: ["The parent class", "The current object", "A static method", "The main method"],
            correct: 1,
            explanation: "'this' refers to the current instance of the class. It's used to distinguish between instance variables and parameters with the same name."
        },
        {
            question: "What is the default value of a boolean variable in Java?",
            choices: ["true", "false", "0", "null"],
            correct: 1,
            explanation: "Boolean instance variables are initialized to false by default. Local variables must be explicitly initialized."
        },
        {
            question: "Which loop is guaranteed to execute at least once?",
            choices: ["for loop", "while loop", "do-while loop", "enhanced for loop"],
            correct: 2,
            explanation: "The do-while loop checks the condition after executing the body, so it always runs at least once even if the condition is initially false."
        },
        {
            question: "What is the output of: System.out.println(5 / 2)?",
            choices: ["2.5", "2", "3", "Error"],
            correct: 1,
            explanation: "Integer division in Java truncates the decimal part. 5/2 = 2 (not 2.5). Use 5.0/2 or (double)5/2 for decimal result."
        },
        {
            question: "What is an array in Java?",
            choices: ["A single variable", "A collection of similar type elements", "A loop structure", "A method"],
            correct: 1,
            explanation: "An array is a container that holds a fixed number of values of the same type. Elements are accessed using index notation: arr[0], arr[1], etc."
        },
        {
            question: "How do you declare an array of integers with 5 elements?",
            choices: ["int[5] arr;", "int arr[5];", "int[] arr = new int[5];", "array int arr = 5;"],
            correct: 2,
            explanation: "Arrays are declared with type[], then initialized with 'new type[size]'. Example: int[] arr = new int[5] creates an array of 5 integers."
        },
        {
            question: "What is the index of the first element in a Java array?",
            choices: ["1", "0", "-1", "Depends on declaration"],
            correct: 1,
            explanation: "Java arrays are zero-indexed, meaning the first element is at index 0, second at index 1, and so on."
        },
        {
            question: "What happens if you try to access an array index that doesn't exist?",
            choices: ["Returns 0", "Returns null", "Throws ArrayIndexOutOfBoundsException", "Creates a new element"],
            correct: 2,
            explanation: "Accessing an invalid index throws ArrayIndexOutOfBoundsException at runtime. Always ensure index is between 0 and array.length-1."
        },
        {
            question: "What is the difference between '=' and '=='?",
            choices: ["No difference", "= assigns, == compares", "= compares, == assigns", "Both assign values"],
            correct: 1,
            explanation: "= is the assignment operator (assigns values). == is the comparison operator (checks equality and returns boolean)."
        },
        {
            question: "What is a String in Java?",
            choices: ["A primitive type", "An array of characters", "A reference type (object)", "A number type"],
            correct: 2,
            explanation: "String is a reference type (class) that represents a sequence of characters. It's immutable - once created, its value cannot be changed."
        },

        // Control Flow (Questions 21-35)
        {
            question: "What is the purpose of the 'break' statement in a loop?",
            choices: ["Pause the loop", "Exit the loop immediately", "Skip current iteration", "Restart the loop"],
            correct: 1,
            explanation: "'break' immediately terminates the loop and transfers control to the statement following the loop."
        },
        {
            question: "What does 'continue' do in a loop?",
            choices: ["Exit the loop", "Skip to next iteration", "Pause the loop", "Restart from beginning"],
            correct: 1,
            explanation: "'continue' skips the remaining code in the current iteration and jumps to the next iteration of the loop."
        },
        {
            question: "Which statement is used for multi-way branching?",
            choices: ["if", "while", "switch", "for"],
            correct: 2,
            explanation: "The switch statement allows multi-way branching based on a variable's value, testing it against multiple case values."
        },
        {
            question: "What happens if you forget 'break' in a switch case?",
            choices: ["Compilation error", "Runtime error", "Fall-through to next case", "Nothing"],
            correct: 2,
            explanation: "Without 'break', execution falls through to the next case (fall-through behavior). This continues until a break or the end of switch is reached."
        },
        {
            question: "What is an infinite loop?",
            choices: ["A loop that never starts", "A loop that runs forever", "A loop that runs once", "A syntax error"],
            correct: 1,
            explanation: "An infinite loop has a condition that's always true, causing it to run forever unless interrupted by break or return."
        },
        {
            question: "What is the enhanced for loop (for-each) used for?",
            choices: ["Counting iterations", "Iterating through arrays/collections", "Creating nested loops", "Conditional branching"],
            correct: 1,
            explanation: "The enhanced for loop (for-each) simplifies iteration through arrays and collections: for(Type item : collection) { }"
        },
        {
            question: "Can you modify the loop variable in a for-each loop?",
            choices: ["Yes, always", "No, it's read-only", "Only in arrays", "Only in collections"],
            correct: 1,
            explanation: "The loop variable in for-each is a copy. Modifying it doesn't change the original collection elements."
        },
        {
            question: "What is nested loop?",
            choices: ["A loop inside another loop", "Two loops running simultaneously", "A broken loop", "A recursive loop"],
            correct: 0,
            explanation: "A nested loop is a loop placed inside another loop's body. The inner loop completes all iterations for each iteration of the outer loop."
        },
        {
            question: "What is the purpose of the 'default' case in a switch statement?",
            choices: ["First case to check", "Handles unmatched values", "Mandatory case", "Last case always"],
            correct: 1,
            explanation: "The 'default' case executes when none of the other cases match. It's optional but useful for handling unexpected values."
        },
        {
            question: "Can you use String in a switch statement in Java?",
            choices: ["No, never", "Yes, in Java 7+", "Only numbers allowed", "Only in enhanced switch"],
            correct: 1,
            explanation: "Since Java 7, switch statements support String, int, char, byte, short, and their wrapper classes, plus enums."
        },
        {
            question: "What is the difference between while and do-while?",
            choices: ["No difference", "while checks condition first, do-while checks after", "do-while is faster", "while is deprecated"],
            correct: 1,
            explanation: "while checks the condition before executing (may not run at all). do-while executes once, then checks condition (always runs at least once)."
        },
        {
            question: "What is a sentinel value in loops?",
            choices: ["Loop counter", "Special value to signal loop termination", "Array index", "Error code"],
            correct: 1,
            explanation: "A sentinel value is a special input that signals the end of data input, causing the loop to terminate. Example: -1 to stop reading positive numbers."
        },
        {
            question: "Can you have an if statement without an else?",
            choices: ["No, else is required", "Yes, else is optional", "Only in methods", "Only in loops"],
            correct: 1,
            explanation: "The else clause is optional. An if statement can stand alone: if(condition) { // code }."
        },
        {
            question: "What is a ternary operator?",
            choices: ["A loop operator", "Shorthand if-else: condition ? value1 : value2", "A comparison operator", "An assignment operator"],
            correct: 1,
            explanation: "The ternary operator (?:) is a compact if-else: result = (x > 0) ? 'positive' : 'not positive'."
        },
        {
            question: "What does && operator do?",
            choices: ["Addition", "Logical AND", "Bitwise AND", "Assignment"],
            correct: 1,
            explanation: "&&is the logical AND operator. Both conditions must be true for the result to be true. It uses short-circuit evaluation."
        },

        // Object-Oriented Programming (Questions 36-50)
        {
            question: "What is encapsulation?",
            choices: ["Hiding implementation details", "Creating multiple objects", "Inheriting from classes", "Overloading methods"],
            correct: 0,
            explanation: "Encapsulation is bundling data and methods together while hiding internal details using private variables and public methods (getters/setters)."
        },
        {
            question: "What is inheritance in Java?",
            choices: ["Copying code", "One class acquiring properties of another", "Creating interfaces", "Overloading methods"],
            correct: 1,
            explanation: "Inheritance allows a class to inherit fields and methods from another class using 'extends'. The child class inherits from the parent class."
        },
        {
            question: "What keyword is used for inheritance?",
            choices: ["implements", "extends", "inherits", "super"],
            correct: 1,
            explanation: "'extends' is used for class inheritance: class Child extends Parent { }. 'implements' is for interfaces."
        },
        {
            question: "Can a class extend multiple classes in Java?",
            choices: ["Yes, unlimited", "Yes, up to 3", "No, only single inheritance", "Yes, but not recommended"],
            correct: 2,
            explanation: "Java doesn't support multiple inheritance for classes (to avoid diamond problem). A class can only extend one class but implement multiple interfaces."
        },
        {
            question: "What is polymorphism?",
            choices: ["Multiple forms of same entity", "Creating many objects", "Using many variables", "Writing many methods"],
            correct: 0,
            explanation: "Polymorphism allows objects to take multiple forms. A parent reference can hold child objects, and methods behave according to actual object type."
        },
        {
            question: "What is method overriding?",
            choices: ["Having multiple methods with same name", "Child class redefining parent's method", "Creating static methods", "Using abstract methods"],
            correct: 1,
            explanation: "Method overriding occurs when a child class provides its own implementation of a method already defined in the parent class."
        },
        {
            question: "What is the purpose of the 'super' keyword?",
            choices: ["Create objects", "Reference parent class", "Define static methods", "Access private variables"],
            correct: 1,
            explanation: "'super' refers to the parent class. Used to call parent's constructor (super()), methods (super.method()), or access parent's fields."
        },
        {
            question: "What is an abstract class?",
            choices: ["A class with no methods", "A class that cannot be instantiated", "A final class", "A static class"],
            correct: 1,
            explanation: "An abstract class cannot be instantiated directly. It may contain abstract methods (without body) that must be implemented by child classes."
        },
        {
            question: "What is an interface in Java?",
            choices: ["A type of class", "A blueprint with abstract methods", "A variable type", "A loop structure"],
            correct: 1,
            explanation: "An interface is a contract that defines methods (abstract by default) that implementing classes must provide. It cannot be instantiated."
        },
        {
            question: "Can an interface have variables?",
            choices: ["No, never", "Yes, but they're public static final by default", "Only private variables", "Only protected variables"],
            correct: 1,
            explanation: "Interface variables are automatically public, static, and final (constants). They must be initialized when declared."
        },
        {
            question: "What is the difference between abstract class and interface?",
            choices: ["No difference", "Abstract class can have concrete methods, interface (pre-Java 8) cannot", "Interface is faster", "Abstract class is deprecated"],
            correct: 1,
            explanation: "Abstract classes can have both abstract and concrete methods, constructors, and instance variables. Interfaces (pre-Java 8) only had abstract methods."
        },
        {
            question: "Can you implement multiple interfaces?",
            choices: ["No", "Yes, using comma separation", "Only 2", "Only if they're related"],
            correct: 1,
            explanation: "A class can implement multiple interfaces: class MyClass implements Interface1, Interface2, Interface3 { }"
        },
        {
            question: "What is the 'final' keyword for a class?",
            choices: ["Makes it abstract", "Prevents inheritance", "Makes it static", "Requires implementation"],
            correct: 1,
            explanation: "'final' on a class prevents it from being extended (no inheritance). Example: final class String (cannot be subclassed)."
        },
        {
            question: "What is the 'final' keyword for a method?",
            choices: ["Last method in class", "Cannot be overridden", "Must be static", "Must be abstract"],
            correct: 1,
            explanation: "'final' on a method prevents child classes from overriding it. The method implementation cannot be changed by subclasses."
        },
        {
            question: "What is the 'final' keyword for a variable?",
            choices: ["Makes it public", "Makes it constant (cannot be reassigned)", "Makes it static", "Deletes the variable"],
            correct: 1,
            explanation: "'final' on a variable makes it a constant - it can only be assigned once and cannot be changed afterward. Convention: use UPPERCASE names."
        },

        // Algorithms & Searching (Questions 51-65)
        {
            question: "What is linear search?",
            choices: ["Searching in a line", "Checking each element sequentially", "Dividing array in half", "Using recursion"],
            correct: 1,
            explanation: "Linear search checks each element one by one from start to end until the target is found or the end is reached. Time complexity: O(n)."
        },
        {
            question: "What is binary search?",
            choices: ["Searching two elements", "Dividing sorted array in half repeatedly", "Searching binary numbers", "Using two loops"],
            correct: 1,
            explanation: "Binary search works on sorted arrays by repeatedly dividing the search interval in half, comparing with the middle element. Time complexity: O(log n)."
        },
        {
            question: "What is a prerequisite for binary search?",
            choices: ["Large array", "Sorted array", "Unique elements", "Numeric values"],
            correct: 1,
            explanation: "Binary search requires a sorted array. If the array isn't sorted, binary search won't work correctly."
        },
        {
            question: "What is the time complexity of linear search?",
            choices: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
            correct: 2,
            explanation: "Linear search has O(n) time complexity because in worst case it checks all n elements. Best case is O(1) if target is first."
        },
        {
            question: "What is the time complexity of binary search?",
            choices: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
            correct: 1,
            explanation: "Binary search has O(log n) time complexity because it halves the search space each iteration. Much faster than linear search for large sorted arrays."
        },
        {
            question: "In binary search, what do you do if middle element equals target?",
            choices: ["Continue searching", "Return the index", "Search left half", "Search right half"],
            correct: 1,
            explanation: "If the middle element equals the target, you've found it! Return its index immediately."
        },
        {
            question: "In binary search, when do you search the left half?",
            choices: ["When target < middle element", "When target > middle element", "Always", "Never"],
            correct: 0,
            explanation: "If target is less than the middle element, it must be in the left half (smaller values) of the sorted array."
        },
        {
            question: "What is a sorting algorithm?",
            choices: ["An algorithm to find elements", "An algorithm to arrange elements in order", "An algorithm to delete elements", "An algorithm to copy elements"],
            correct: 1,
            explanation: "A sorting algorithm arranges elements in a specific order (ascending or descending) according to a comparison criterion."
        },
        {
            question: "What is bubble sort?",
            choices: ["Sorting bubbles", "Repeatedly swapping adjacent elements if they're in wrong order", "Using recursion", "Dividing array"],
            correct: 1,
            explanation: "Bubble sort repeatedly compares adjacent elements and swaps them if they're in wrong order, 'bubbling' the largest element to the end each pass."
        },
        {
            question: "What is the time complexity of bubble sort?",
            choices: ["O(n)", "O(n log n)", "O(n²)", "O(log n)"],
            correct: 2,
            explanation: "Bubble sort has O(n²) time complexity due to nested loops. It's inefficient for large arrays but simple to understand and implement."
        },
        {
            question: "What is selection sort?",
            choices: ["Selecting random elements", "Finding minimum and placing it at beginning repeatedly", "Dividing array", "Using recursion"],
            correct: 1,
            explanation: "Selection sort repeatedly finds the minimum element from the unsorted portion and places it at the beginning of that portion."
        },
        {
            question: "What is insertion sort?",
            choices: ["Inserting new elements", "Building sorted array one element at a time", "Using binary search", "Dividing array"],
            correct: 1,
            explanation: "Insertion sort builds the final sorted array one element at a time, inserting each element into its correct position among previously sorted elements."
        },
        {
            question: "Which is fastest for nearly sorted data?",
            choices: ["Bubble sort", "Selection sort", "Insertion sort", "All same speed"],
            correct: 2,
            explanation: "Insertion sort is very efficient on nearly sorted data (almost O(n)). It performs well when most elements are already in correct positions."
        },
        {
            question: "What is recursion?",
            choices: ["Looping", "A function calling itself", "Creating objects", "Sorting algorithm"],
            correct: 1,
            explanation: "Recursion is when a function calls itself to solve a problem by breaking it into smaller subproblems. Must have a base case to prevent infinite recursion."
        },
        {
            question: "What is a base case in recursion?",
            choices: ["First recursive call", "Condition to stop recursion", "Error handling", "Loop counter"],
            correct: 1,
            explanation: "The base case is a condition that stops the recursion. Without it, recursion would continue infinitely and cause a stack overflow."
        },

        // More Java Concepts (Questions 66-85)
        {
            question: "What is the difference between '++i' and 'i++'?",
            choices: ["No difference", "++i increments before use, i++ increments after use", "++i is faster", "i++ is deprecated"],
            correct: 1,
            explanation: "++i (pre-increment) increments first, then uses the value. i++ (post-increment) uses the current value, then increments."
        },
        {
            question: "What is a NullPointerException?",
            choices: ["Syntax error", "Attempting to use a null reference", "Array error", "Type mismatch"],
            correct: 1,
            explanation: "NullPointerException occurs when you try to use a null object reference (calling methods, accessing fields, etc. on null)."
        },
        {
            question: "What is the 'toString()' method?",
            choices: ["Converts to String type", "Returns string representation of object", "Creates new string", "Compares strings"],
            correct: 1,
            explanation: "toString() returns a String representation of an object. It's automatically called when printing objects: System.out.println(obj)."
        },
        {
            question: "What is the 'equals()' method used for?",
            choices: ["Assignment", "Comparing object content", "Creating objects", "Deleting objects"],
            correct: 1,
            explanation: "equals() compares the content/state of objects. String.equals() compares character sequences, not references like ==."
        },
        {
            question: "What is a getter method?",
            choices: ["Gets user input", "Returns private variable value", "Creates objects", "Deletes variables"],
            correct: 1,
            explanation: "A getter (accessor) method returns the value of a private instance variable, providing controlled access: public int getAge() { return age; }."
        },
        {
            question: "What is a setter method?",
            choices: ["Sets up the program", "Modifies private variable value", "Creates new class", "Deletes objects"],
            correct: 1,
            explanation: "A setter (mutator) method modifies a private instance variable, often with validation: public void setAge(int a) { if(a>0) age=a; }."
        },
        {
            question: "What is method signature?",
            choices: ["Method comments", "Method name + parameter list", "Return type", "Method body"],
            correct: 1,
            explanation: "Method signature is the method name plus its parameter list (types and order). Used to identify and differentiate methods in overloading."
        },
        {
            question: "Can you have multiple constructors in a class?",
            choices: ["No, only one", "Yes, through constructor overloading", "Only if they're static", "Only with different names"],
            correct: 1,
            explanation: "Yes, through constructor overloading - multiple constructors with different parameter lists. Example: Person(), Person(String name), Person(String name, int age)."
        },
        {
            question: "What is a default constructor?",
            choices: ["Most used constructor", "No-argument constructor", "Constructor with default values", "Static constructor"],
            correct: 1,
            explanation: "A default constructor has no parameters. If you don't write any constructor, Java provides one automatically. If you write any constructor, the default isn't automatic."
        },
        {
            question: "What is the difference between local and instance variables?",
            choices: ["No difference", "Local are in methods, instance are in class", "Local are public", "Instance are static"],
            correct: 1,
            explanation: "Local variables are declared inside methods and exist only during method execution. Instance variables are declared in class and exist as long as the object exists."
        },
        {
            question: "What is variable scope?",
            choices: ["Variable size", "Region where variable is accessible", "Variable type", "Variable speed"],
            correct: 1,
            explanation: "Scope defines where a variable can be accessed. Local variables are limited to their method/block. Instance variables are accessible throughout the class."
        },
        {
            question: "What happens if a method doesn't have a return statement but has return type?",
            choices: ["Runtime error", "Compilation error", "Returns null", "Returns 0"],
            correct: 1,
            explanation: "If a non-void method doesn't return a value in all code paths, it won't compile. Every path must return a value of the declared return type."
        },
        {
            question: "What is the 'void' return type?",
            choices: ["Returns null", "Returns nothing", "Returns 0", "Returns empty string"],
            correct: 1,
            explanation: "'void' means the method doesn't return any value. It performs actions but doesn't send back data to the caller."
        },
        {
            question: "Can a constructor have a return type?",
            choices: ["Yes, any type", "Yes, only void", "No, never", "Yes, only the class type"],
            correct: 2,
            explanation: "Constructors never have a return type (not even void). They implicitly return the newly created object."
        },
        {
            question: "What is concatenation?",
            choices: ["Splitting strings", "Joining strings together", "Comparing strings", "Converting strings"],
            correct: 1,
            explanation: "String concatenation joins strings together using the + operator: 'Hello' + ' ' + 'World' = 'Hello World'."
        },
        {
            question: "What is the length() method for strings?",
            choices: ["Sorts the string", "Returns number of characters", "Converts to lowercase", "Removes spaces"],
            correct: 1,
            explanation: "The length() method returns the number of characters in the string: 'hello'.length() returns 5."
        },
        {
            question: "What is the charAt() method?",
            choices: ["Returns character at specific index", "Changes a character", "Counts characters", "Deletes characters"],
            correct: 0,
            explanation: "charAt(index) returns the character at the specified position: 'hello'.charAt(1) returns 'e'."
        },
        {
            question: "What is the substring() method?",
            choices: ["Deletes part of string", "Extracts part of string", "Searches string", "Reverses string"],
            correct: 1,
            explanation: "substring(start, end) extracts characters from start index (inclusive) to end index (exclusive): 'hello'.substring(1,4) returns 'ell'."
        },
        {
            question: "Are strings mutable in Java?",
            choices: ["Yes", "No, they're immutable", "Depends on declaration", "Only if declared final"],
            correct: 1,
            explanation: "Strings are immutable - once created, they cannot be changed. String methods return new String objects rather than modifying the original."
        },
        {
            question: "What is a StringBuilder?",
            choices: ["A type of string", "Mutable sequence of characters", "String comparison tool", "String sorter"],
            correct: 1,
            explanation: "StringBuilder is a mutable sequence of characters, more efficient for string manipulation than creating new String objects repeatedly."
        },

        // Advanced Topics (Questions 86-100)
        {
            question: "What is exception handling?",
            choices: ["Deleting errors", "Handling runtime errors gracefully", "Preventing compilation", "Testing code"],
            correct: 1,
            explanation: "Exception handling deals with runtime errors using try-catch blocks to prevent program crashes and handle errors gracefully."
        },
        {
            question: "What is a try-catch block?",
            choices: ["Loop structure", "Code that might throw exception + error handling", "Variable declaration", "Method definition"],
            correct: 1,
            explanation: "try-catch wraps code that might throw exceptions. try contains risky code, catch handles exceptions if they occur."
        },
        {
            question: "What is the purpose of 'throw' keyword?",
            choices: ["Delete exceptions", "Manually throw an exception", "Catch exceptions", "Ignore exceptions"],
            correct: 1,
            explanation: "'throw' manually raises an exception: throw new IllegalArgumentException('Invalid input'). Used to signal errors in your code."
        },
        {
            question: "What is the purpose of 'throws' keyword?",
            choices: ["Catches exceptions", "Declares method might throw exception", "Throws multiple exceptions", "Prevents exceptions"],
            correct: 1,
            explanation: "'throws' in method signature declares that method might throw certain exceptions, requiring caller to handle them."
        },
        {
            question: "What is a checked exception?",
            choices: ["Exceptions checked by compiler", "Runtime exceptions", "Syntax errors", "Logic errors"],
            correct: 0,
            explanation: "Checked exceptions must be either caught or declared with throws. Examples: IOException, SQLException. Compiler enforces handling."
        },
        {
            question: "What is an unchecked exception?",
            choices: ["Undetected errors", "Runtime exceptions not required to handle", "Compilation errors", "Warning messages"],
            correct: 1,
            explanation: "Unchecked exceptions (RuntimeException subclasses) don't require explicit handling. Examples: NullPointerException, ArrayIndexOutOfBoundsException."
        },
        {
            question: "What is the finally block?",
            choices: ["Last catch block", "Code that always executes after try-catch", "Final method", "Last statement"],
            correct: 1,
            explanation: "The finally block always executes after try-catch, regardless of whether exception occurred. Used for cleanup (closing files, connections)."
        },
        {
            question: "What is a package in Java?",
            choices: ["Compressed files", "Namespace grouping related classes", "Installation file", "Library"],
            correct: 1,
            explanation: "A package is a namespace that groups related classes and interfaces. Helps organize code and avoid name conflicts."
        },
        {
            question: "What is the 'import' statement for?",
            choices: ["Download files", "Use classes from other packages", "Export code", "Compile code"],
            correct: 1,
            explanation: "'import' allows you to use classes from other packages without fully qualified names: import java.util.ArrayList;"
        },
        {
            question: "What is ArrayList?",
            choices: ["Fixed-size array", "Dynamic-size array (resizable)", "Sorted array", "Multi-dimensional array"],
            correct: 1,
            explanation: "ArrayList is a resizable array from java.util. It can grow/shrink dynamically, unlike regular arrays with fixed size."
        },
        {
            question: "What is the difference between ArrayList and array?",
            choices: ["No difference", "ArrayList is dynamic, array is fixed size", "Arrays are faster always", "ArrayList only stores objects"],
            correct: 1,
            explanation: "Arrays have fixed size, ArrayList can grow/shrink. ArrayList only stores objects (auto-boxing for primitives), arrays store primitives or objects."
        },
        {
            question: "What is generics in Java?",
            choices: ["General methods", "Type parameters for type safety", "Public methods", "Static methods"],
            correct: 1,
            explanation: "Generics allow type parameters in classes/methods for type safety: ArrayList<String> ensures only Strings, detected at compile-time."
        },
        {
            question: "What is an enum?",
            choices: ["Enumeration of named constants", "A type of loop", "Error number", "Exception type"],
            correct: 0,
            explanation: "Enum is a special type for defining a fixed set of named constants: enum Day {MONDAY, TUESDAY, WEDNESDAY, ...}."
        },
        {
            question: "What is the modulo operator (%)?",
            choices: ["Division", "Remainder after division", "Percentage", "Multiplication"],
            correct: 1,
            explanation: "Modulo (%) returns the remainder after division: 7 % 3 = 1 (7 divided by 3 is 2 remainder 1)."
        },
        {
            question: "What does Math.pow(2, 3) return?",
            choices: ["5", "6", "8", "9"],
            correct: 2,
            explanation: "Math.pow(base, exponent) calculates power: Math.pow(2, 3) = 2³ = 2×2×2 = 8."
        }
    ],

    calculus: [
        // Limits (Questions 1-15)
        {
            question: "What is a limit in calculus?",
            choices: ["Maximum value", "Value a function approaches as input approaches a point", "Minimum value", "Average value"],
            correct: 1,
            explanation: "A limit describes the value that a function approaches as the input (x) gets arbitrarily close to some value, even if the function isn't defined at that point."
        },
        {
            question: "What does lim(x→2) f(x) = 5 mean?",
            choices: ["f(2) = 5", "f(x) approaches 5 as x approaches 2", "f(x) = 5 for all x", "f(5) = 2"],
            correct: 1,
            explanation: "This means as x gets closer to 2 from either direction, the function values get closer to 5. The function doesn't need to equal 5 at x=2."
        },
        {
            question: "Can a limit exist at a point where the function is undefined?",
            choices: ["No, never", "Yes, limits describe behavior near a point", "Only for polynomials", "Only for continuous functions"],
            correct: 1,
            explanation: "Yes! Limits describe behavior as you approach a point, not at the point itself. Example: lim(x→0) (sin x)/x = 1, even though the function is undefined at x=0."
        },
        {
            question: "What is a one-sided limit?",
            choices: ["Limit with one variable", "Limit approaching from left or right only", "Limit of odd functions", "First derivative"],
            correct: 1,
            explanation: "A one-sided limit approaches from one direction only. lim(x→a⁺) approaches from right (x > a), lim(x→a⁻) approaches from left (x < a)."
        },
        {
            question: "When does a two-sided limit exist?",
            choices: ["Always", "When left and right limits exist and are equal", "Only for continuous functions", "Only at x=0"],
            correct: 1,
            explanation: "A two-sided limit exists only when both one-sided limits exist and equal the same value. If they differ, the limit does not exist."
        },
        {
            question: "What is lim(x→∞) (1/x)?",
            choices: ["∞", "0", "1", "Does not exist"],
            correct: 1,
            explanation: "As x approaches infinity, 1/x gets smaller and smaller, approaching 0. Think: 1/100, 1/1000, 1/1000000... → 0."
        },
        {
            question: "What is lim(x→0) (1/x²)?",
            choices: ["0", "1", "∞", "-∞"],
            correct: 2,
            explanation: "As x approaches 0, 1/x² grows without bound (becomes infinitely large). Example: 1/(0.01)² = 10,000."
        },
        {
            question: "What does it mean if a limit does not exist?",
            choices: ["Function has no value", "Function doesn't approach a single value", "Function is zero", "Function is undefined everywhere"],
            correct: 1,
            explanation: "A limit doesn't exist when the function oscillates, has different left/right limits, or grows without bound (unless we say it approaches ±∞)."
        },
        {
            question: "What is the limit of a constant function lim(x→a) c?",
            choices: ["0", "a", "c", "Undefined"],
            correct: 2,
            explanation: "The limit of a constant is the constant itself: lim(x→a) 5 = 5. Constant functions always equal their constant value."
        },
        {
            question: "What is lim(x→a) x?",
            choices: ["0", "1", "a", "x"],
            correct: 2,
            explanation: "The limit of x as x approaches a is simply a: lim(x→3) x = 3. The function f(x)=x approaches whatever value x approaches."
        },
        {
            question: "What is the Sum Rule for limits?",
            choices: ["lim[f+g] = lim f + lim g", "lim[f+g] = lim f × lim g", "lim[f+g] = lim f - lim g", "No rule exists"],
            correct: 0,
            explanation: "The Sum Rule states that the limit of a sum equals the sum of the limits (if both exist): lim[f(x)+g(x)] = lim f(x) + lim g(x)."
        },
        {
            question: "What is the Product Rule for limits?",
            choices: ["lim[fg] = lim f + lim g", "lim[fg] = lim f × lim g", "lim[fg] = lim f / lim g", "No rule exists"],
            correct: 1,
            explanation: "The Product Rule states that the limit of a product equals the product of the limits: lim[f(x)·g(x)] = lim f(x) · lim g(x)."
        },
        {
            question: "What is the Quotient Rule for limits?",
            choices: ["lim[f/g] = lim f + lim g", "lim[f/g] = lim f / lim g (if lim g ≠ 0)", "lim[f/g] = lim f × lim g", "No rule exists"],
            correct: 1,
            explanation: "The Quotient Rule states lim[f(x)/g(x)] = lim f(x) / lim g(x), provided the denominator's limit is not zero."
        },
        {
            question: "What is a vertical asymptote?",
            choices: ["Horizontal line function approaches", "Vertical line where function goes to ±∞", "y-intercept", "Maximum point"],
            correct: 1,
            explanation: "A vertical asymptote is a vertical line x=a where the function approaches ±∞. Example: f(x)=1/x has vertical asymptote at x=0."
        },
        {
            question: "What is a horizontal asymptote?",
            choices: ["Vertical line", "Horizontal line y=L that function approaches as x→±∞", "x-axis", "y-axis"],
            correct: 1,
            explanation: "A horizontal asymptote y=L is the value the function approaches as x approaches ±∞. Example: f(x)=1/x has horizontal asymptote y=0."
        },

        // Continuity (Questions 16-25)
        {
            question: "What does it mean for a function to be continuous at x=a?",
            choices: ["f(a) exists", "lim(x→a) f(x) exists", "lim(x→a) f(x) = f(a)", "f is defined everywhere"],
            correct: 2,
            explanation: "A function is continuous at x=a if: (1) f(a) exists, (2) lim(x→a) f(x) exists, and (3) lim(x→a) f(x) = f(a). All three conditions required."
        },
        {
            question: "What is a removable discontinuity?",
            choices: ["Cannot be fixed", "Hole that can be filled by redefining one point", "Jump in function", "Vertical asymptote"],
            correct: 1,
            explanation: "A removable discontinuity is a 'hole' where the limit exists but doesn't equal the function value (or function undefined). Can be fixed by redefining that point."
        },
        {
            question: "What is a jump discontinuity?",
            choices: ["Vertical asymptote", "Left and right limits exist but aren't equal", "Function undefined", "Hole in graph"],
            correct: 1,
            explanation: "A jump discontinuity occurs when left and right limits exist but don't equal each other. The graph 'jumps' from one value to another."
        },
        {
            question: "What is an infinite discontinuity?",
            choices: ["Hole", "Jump", "Vertical asymptote (function → ±∞)", "Removable"],
            correct: 2,
            explanation: "An infinite discontinuity occurs where the function approaches ±∞, creating a vertical asymptote. Example: f(x)=1/x at x=0."
        },
        {
            question: "Are polynomial functions continuous?",
            choices: ["No", "Yes, everywhere", "Only at integers", "Only at positive values"],
            correct: 1,
            explanation: "Polynomial functions (like x², x³-2x+1) are continuous everywhere. They have no breaks, jumps, or asymptotes."
        },
        {
            question: "Is f(x) = 1/x continuous at x=0?",
            choices: ["Yes", "No, it's undefined and has vertical asymptote", "Yes, but with a hole", "Only from the right"],
            correct: 1,
            explanation: "No, f(x)=1/x is undefined at x=0 and has a vertical asymptote there. The function is not continuous at x=0."
        },
        {
            question: "What is the Intermediate Value Theorem?",
            choices: ["For continuous f on [a,b], f takes every value between f(a) and f(b)", "All functions have intermediates", "Derivatives exist everywhere", "Limits always exist"],
            correct: 0,
            explanation: "IVT states: if f is continuous on [a,b] and k is between f(a) and f(b), then there exists c in (a,b) where f(c)=k."
        },
        {
            question: "Can the Intermediate Value Theorem be used if function is discontinuous?",
            choices: ["Yes, always", "No, function must be continuous", "Only for polynomials", "Only if derivative exists"],
            correct: 1,
            explanation: "No! IVT requires the function to be continuous on the interval. Discontinuous functions may skip intermediate values."
        },
        {
            question: "What does lim(x→a⁺) mean?",
            choices: ["Limit from left", "Limit from right (x > a)", "Two-sided limit", "Limit doesn't exist"],
            correct: 1,
            explanation: "The notation ⁺ means approaching from the right side (positive direction). We consider values x > a getting closer to a."
        },
        {
            question: "What does lim(x→a⁻) mean?",
            choices: ["Limit from left (x < a)", "Limit from right", "Negative limit", "Limit doesn't exist"],
            correct: 0,
            explanation: "The notation ⁻ means approaching from the left side (negative direction). We consider values x < a getting closer to a."
        },

        // Derivatives Basics (Questions 26-45)
        {
            question: "What is a derivative?",
            choices: ["Slope of tangent line / instantaneous rate of change", "Area under curve", "Antiderivative", "Limit of function"],
            correct: 0,
            explanation: "The derivative f'(x) represents the instantaneous rate of change or the slope of the tangent line to the curve at that point."
        },
        {
            question: "What is the formal definition of derivative?",
            choices: ["f'(x) = f(x+1) - f(x)", "f'(x) = lim(h→0) [f(x+h)-f(x)]/h", "f'(x) = f(x)/x", "f'(x) = slope"],
            correct: 1,
            explanation: "The derivative is defined as f'(x) = lim(h→0) [f(x+h)-f(x)]/h, representing the limit of the average rate of change as the interval shrinks to zero."
        },
        {
            question: "What is the Power Rule for derivatives?",
            choices: ["d/dx(xⁿ) = xⁿ⁻¹", "d/dx(xⁿ) = nxⁿ⁻¹", "d/dx(xⁿ) = nxⁿ", "d/dx(xⁿ) = nx"],
            correct: 1,
            explanation: "The Power Rule states: d/dx(xⁿ) = nxⁿ⁻¹. Examples: d/dx(x³) = 3x², d/dx(x⁵) = 5x⁴."
        },
        {
            question: "What is the derivative of a constant?",
            choices: ["1", "0", "The constant itself", "Undefined"],
            correct: 1,
            explanation: "The derivative of any constant is 0: d/dx(5) = 0. Constants don't change, so their rate of change is zero."
        },
        {
            question: "What is the derivative of f(x) = x?",
            choices: ["0", "1", "x", "2x"],
            correct: 1,
            explanation: "d/dx(x) = 1. The function f(x)=x has a constant slope of 1 everywhere."
        },
        {
            question: "What is the Constant Multiple Rule?",
            choices: ["d/dx(cf) = cf'", "d/dx(cf) = c·f'(x)", "d/dx(cf) = f'(x)/c", "d/dx(cf) = c"],
            correct: 1,
            explanation: "The Constant Multiple Rule: d/dx[c·f(x)] = c·f'(x). Example: d/dx(5x²) = 5·2x = 10x."
        },
        {
            question: "What is the Sum Rule for derivatives?",
            choices: ["(f+g)' = f' + g'", "(f+g)' = f'·g'", "(f+g)' = f'/g'", "(f+g)' = f'"],
            correct: 0,
            explanation: "The Sum Rule states: d/dx[f(x)+g(x)] = f'(x)+g'(x). The derivative of a sum is the sum of derivatives."
        },
        {
            question: "What is the Product Rule?",
            choices: ["(fg)' = f'g'", "(fg)' = f'g + fg'", "(fg)' = f'g - fg'", "(fg)' = (f'g')/(fg)"],
            correct: 1,
            explanation: "The Product Rule: d/dx[f(x)g(x)] = f'(x)g(x) + f(x)g'(x). NOT just f'·g'!"
        },
        {
            question: "What is the Quotient Rule?",
            choices: ["(f/g)' = f'/g'", "(f/g)' = (f'g - fg')/g²", "(f/g)' = (f'g + fg')/g²", "(f/g)' = f'g - fg'"],
            correct: 1,
            explanation: "The Quotient Rule: d/dx[f/g] = (f'g - fg')/g². Remember: 'low d-high minus high d-low, square the bottom and away we go!'"
        },
        {
            question: "What is the derivative of sin(x)?",
            choices: ["cos(x)", "-cos(x)", "-sin(x)", "tan(x)"],
            correct: 0,
            explanation: "d/dx(sin x) = cos x. The derivative of sine is cosine."
        },
        {
            question: "What is the derivative of cos(x)?",
            choices: ["sin(x)", "-sin(x)", "-cos(x)", "tan(x)"],
            correct: 1,
            explanation: "d/dx(cos x) = -sin x. Note the negative sign - the derivative of cosine is negative sine."
        },
        {
            question: "What is the derivative of e^x?",
            choices: ["e^x", "xe^(x-1)", "e^x·ln(e)", "1/e^x"],
            correct: 0,
            explanation: "d/dx(e^x) = e^x. The exponential function is its own derivative - a unique and important property!"
        },
        {
            question: "What is the derivative of ln(x)?",
            choices: ["1/x", "x", "1/x²", "e^x"],
            correct: 0,
            explanation: "d/dx(ln x) = 1/x for x > 0. The natural logarithm's derivative is the reciprocal function."
        },
        {
            question: "What is the Chain Rule?",
            choices: ["d/dx[f(g(x))] = f'(g(x))·g'(x)", "d/dx[f(g(x))] = f'(x)·g'(x)", "d/dx[f(g(x))] = f'(g'(x))", "d/dx[f(g(x))] = f(x)·g(x)"],
            correct: 0,
            explanation: "The Chain Rule: d/dx[f(g(x))] = f'(g(x))·g'(x). Derivative of outside function (at inside) times derivative of inside function."
        },
        {
            question: "Using Chain Rule, what is d/dx[(3x+1)²]?",
            choices: ["6x+2", "2(3x+1)·3 = 6(3x+1)", "6(3x+1)²", "2(3x+1)"],
            correct: 1,
            explanation: "Using Chain Rule: outer derivative is 2(3x+1)¹, inner derivative is 3. Result: 2(3x+1)·3 = 6(3x+1) = 18x+6."
        },
        {
            question: "What does f'(x) > 0 indicate?",
            choices: ["Function decreasing", "Function increasing", "Function has maximum", "Function is constant"],
            correct: 1,
            explanation: "When f'(x) > 0, the slope is positive, meaning the function is increasing (going up) on that interval."
        },
        {
            question: "What does f'(x) < 0 indicate?",
            choices: ["Function increasing", "Function decreasing", "Function has minimum", "Function is constant"],
            correct: 1,
            explanation: "When f'(x) < 0, the slope is negative, meaning the function is decreasing (going down) on that interval."
        },
        {
            question: "What is a critical point?",
            choices: ["Maximum of function", "Point where f'(x)=0 or f'(x) undefined", "Minimum of function", "Inflection point"],
            correct: 1,
            explanation: "A critical point occurs where f'(x)=0 or f'(x) is undefined. These are candidates for local maxima, minima, or neither."
        },
        {
            question: "What is the First Derivative Test?",
            choices: ["Finding second derivative", "Using f' sign changes to identify max/min", "Testing continuity", "Finding limits"],
            correct: 1,
            explanation: "The First Derivative Test uses sign changes in f'(x) around critical points: (+to-) is max, (-to+) is min, (no change) is neither."
        },
        {
            question: "What is a local maximum?",
            choices: ["Largest value on entire domain", "Largest value in surrounding neighborhood", "Point where f'=0", "Endpoint"],
            correct: 1,
            explanation: "A local (relative) maximum is where f(c) ≥ f(x) for all x near c. It's the highest point in the immediate area, not necessarily overall."
        },

        // Second Derivatives & Applications (Questions 46-65)
        {
            question: "What is the second derivative?",
            choices: ["Derivative taken twice", "Antiderivative", "Slope of tangent", "Original function"],
            correct: 0,
            explanation: "The second derivative f''(x) is the derivative of the derivative: f''(x) = d/dx[f'(x)]. It measures the rate of change of the rate of change."
        },
        {
            question: "What does f''(x) measure?",
            choices: ["Slope", "Concavity (how curve bends)", "Area", "Limit"],
            correct: 1,
            explanation: "The second derivative measures concavity - whether the curve is bending upward or downward."
        },
        {
            question: "What does f''(x) > 0 indicate?",
            choices: ["Decreasing", "Concave up (∪ shape)", "Concave down", "Inflection point"],
            correct: 1,
            explanation: "When f''(x) > 0, the function is concave up (curves upward like ∪). The slope is increasing."
        },
        {
            question: "What does f''(x) < 0 indicate?",
            choices: ["Increasing", "Concave up", "Concave down (∩ shape)", "Linear"],
            correct: 2,
            explanation: "When f''(x) < 0, the function is concave down (curves downward like ∩). The slope is decreasing."
        },
        {
            question: "What is an inflection point?",
            choices: ["Maximum", "Minimum", "Point where concavity changes (f'' changes sign)", "Asymptote"],
            correct: 2,
            explanation: "An inflection point is where the concavity changes (from up to down or vice versa). f''(x) changes sign (may be 0 or undefined there)."
        },
        {
            question: "What is the Second Derivative Test?",
            choices: ["Finding f''(x)", "Using f''(c) to classify critical points: f''>0→min, f''<0→max", "Testing continuity", "Finding inflection points"],
            correct: 1,
            explanation: "Second Derivative Test: At critical point c where f'(c)=0, if f''(c)>0 it's a local min, if f''(c)<0 it's a local max, if f''(c)=0 test is inconclusive."
        },
        {
            question: "What is velocity in calculus?",
            choices: ["Position", "First derivative of position", "Second derivative of position", "Acceleration"],
            correct: 1,
            explanation: "Velocity v(t) is the first derivative of position s(t): v(t) = s'(t) = ds/dt. It represents the rate of change of position."
        },
        {
            question: "What is acceleration in calculus?",
            choices: ["Position", "Velocity", "Second derivative of position / first derivative of velocity", "Third derivative"],
            correct: 2,
            explanation: "Acceleration a(t) is the derivative of velocity or second derivative of position: a(t) = v'(t) = s''(t) = d²s/dt²."
        },
        {
            question: "If position s(t) = t², what is velocity?",
            choices: ["t", "2t", "t²", "2"],
            correct: 1,
            explanation: "Velocity v(t) = s'(t) = d/dt(t²) = 2t."
        },
        {
            question: "If velocity v(t) = 3t², what is acceleration?",
            choices: ["3t", "6t", "t³", "3t²"],
            correct: 1,
            explanation: "Acceleration a(t) = v'(t) = d/dt(3t²) = 6t."
        },
        {
            question: "What does it mean if velocity is negative?",
            choices: ["Slowing down", "Moving in negative direction", "Stopped", "Accelerating"],
            correct: 1,
            explanation: "Negative velocity means moving in the negative direction (leftward or downward, depending on coordinate system)."
        },
        {
            question: "What does it mean if acceleration is positive?",
            choices: ["Speed decreasing", "Velocity increasing (speeding up in positive direction)", "Moving backward", "Stopped"],
            correct: 1,
            explanation: "Positive acceleration means velocity is increasing. If velocity is also positive, object is speeding up."
        },
        {
            question: "What is marginal cost in economics?",
            choices: ["Total cost", "Derivative of cost / cost to produce one more unit", "Average cost", "Fixed cost"],
            correct: 1,
            explanation: "Marginal cost MC(x) = C'(x) is the derivative of the cost function, representing the approximate cost to produce one additional unit."
        },
        {
            question: "What is marginal revenue?",
            choices: ["Total revenue", "Derivative of revenue / revenue from one more unit", "Average revenue", "Profit"],
            correct: 1,
            explanation: "Marginal revenue MR(x) = R'(x) is the derivative of revenue, representing the approximate revenue from selling one additional unit."
        },
        {
            question: "How do you maximize profit?",
            choices: ["Set cost to 0", "Set revenue to 0", "Set marginal revenue equal to marginal cost: MR = MC", "Minimize cost"],
            correct: 2,
            explanation: "Profit is maximized where marginal revenue equals marginal cost: MR = MC, or P'(x) = R'(x) - C'(x) = 0."
        },
        {
            question: "What is related rates?",
            choices: ["Comparing different rates", "Using derivatives to relate rates of change", "Finding second derivatives", "Comparing functions"],
            correct: 1,
            explanation: "Related rates problems use the Chain Rule and implicit differentiation to relate rates of change of different quantities."
        },
        {
            question: "In optimization, what are the steps?",
            choices: ["Guess and check", "Find equation, take derivative, find critical points, test", "Use limits", "Plot graph"],
            correct: 1,
            explanation: "Optimization steps: (1) Express quantity to optimize as a function, (2) Find derivative, (3) Find critical points (f'=0), (4) Test using first or second derivative test, (5) Check endpoints."
        },
        {
            question: "What is implicit differentiation?",
            choices: ["Regular differentiation", "Differentiating equations not solved for y", "Finding antiderivatives", "Numerical method"],
            correct: 1,
            explanation: "Implicit differentiation finds dy/dx for equations like x² + y² = 25 where y isn't isolated. Differentiate both sides with respect to x, treating y as y(x)."
        },
        {
            question: "When differentiating y² implicitly with respect to x, what do you get?",
            choices: ["2y", "2y·dy/dx", "y²/2", "2xy"],
            correct: 1,
            explanation: "Using Chain Rule: d/dx(y²) = 2y·dy/dx. We must multiply by dy/dx because y is a function of x."
        },
        {
            question: "What is the derivative of y³ with respect to x (implicitly)?",
            choices: ["3y²", "3y²·dy/dx", "y⁴/4", "3y³"],
            correct: 1,
            explanation: "By Chain Rule: d/dx(y³) = 3y²·dy/dx. Always multiply by dy/dx when differentiating y terms with respect to x."
        },

        // More Applications & Integration Intro (Questions 66-85)
        {
            question: "What is L'Hôpital's Rule used for?",
            choices: ["Finding derivatives", "Evaluating indeterminate forms like 0/0", "Finding integrals", "Testing continuity"],
            correct: 1,
            explanation: "L'Hôpital's Rule evaluates limits of indeterminate forms (0/0 or ∞/∞) by taking derivatives of numerator and denominator: lim f/g = lim f'/g'."
        },
        {
            question: "What forms can L'Hôpital's Rule be applied to?",
            choices: ["0/0 and ∞/∞ only", "All limits", "0/0, ∞/∞, and others after manipulation", "Only 0/0"],
            correct: 2,
            explanation: "L'Hôpital's Rule directly applies to 0/0 and ∞/∞. Other forms (0·∞, ∞-∞, 1^∞, 0⁰, ∞⁰) can be manipulated into these forms."
        },
        {
            question: "What does dx represent in calculus?",
            choices: ["Change in x", "Infinitesimal change in x", "Derivative of x", "x divided by d"],
            correct: 1,
            explanation: "dx represents an infinitesimally small change in x. In integrals, it indicates the variable of integration."
        },
        {
            question: "What is an antiderivative?",
            choices: ["Opposite of derivative", "Function whose derivative is the given function", "Negative derivative", "Second derivative"],
            correct: 1,
            explanation: "An antiderivative of f(x) is a function F(x) such that F'(x) = f(x). Example: F(x) = x³/3 is an antiderivative of f(x) = x²."
        },
        {
            question: "What is the indefinite integral?",
            choices: ["Definite integral without bounds", "General antiderivative + C", "Area under curve", "Limit"],
            correct: 1,
            explanation: "The indefinite integral ∫f(x)dx is the most general antiderivative of f(x), written as F(x) + C where C is an arbitrary constant."
        },
        {
            question: "Why do we add '+C' to indefinite integrals?",
            choices: ["Convention", "Because derivatives of constants are 0", "Makes it bigger", "Required by rule"],
            correct: 1,
            explanation: "We add +C because the derivative of any constant is 0, so there are infinitely many antiderivatives differing only by a constant."
        },
        {
            question: "What is the Power Rule for integration?",
            choices: ["∫xⁿ dx = xⁿ⁺¹/(n+1) + C (n≠-1)", "∫xⁿ dx = nxⁿ⁻¹ + C", "∫xⁿ dx = xⁿ + C", "∫xⁿ dx = ln|x| + C"],
            correct: 0,
            explanation: "Integration Power Rule: ∫xⁿ dx = xⁿ⁺¹/(n+1) + C for n ≠ -1. Increase power by 1, divide by new power."
        },
        {
            question: "What is ∫x² dx?",
            choices: ["2x + C", "x³ + C", "x³/3 + C", "2x³ + C"],
            correct: 2,
            explanation: "Using Power Rule: ∫x² dx = x²⁺¹/(2+1) + C = x³/3 + C."
        },
        {
            question: "What is ∫(1/x) dx?",
            choices: ["x²/2 + C", "ln|x| + C", "-1/x² + C", "x + C"],
            correct: 1,
            explanation: "∫(1/x) dx = ln|x| + C. This is the special case where the Power Rule doesn't apply (n = -1)."
        },
        {
            question: "What is ∫e^x dx?",
            choices: ["e^x + C", "xe^(x-1) + C", "e^x/x + C", "ln(e^x) + C"],
            correct: 0,
            explanation: "∫e^x dx = e^x + C. The exponential function is its own antiderivative (just like it's its own derivative)."
        },
        {
            question: "What is ∫cos(x) dx?",
            choices: ["-sin(x) + C", "sin(x) + C", "cos(x) + C", "-cos(x) + C"],
            correct: 1,
            explanation: "∫cos(x) dx = sin(x) + C. The antiderivative of cosine is sine."
        },
        {
            question: "What is ∫sin(x) dx?",
            choices: ["cos(x) + C", "-cos(x) + C", "sin(x) + C", "-sin(x) + C"],
            correct: 1,
            explanation: "∫sin(x) dx = -cos(x) + C. Note the negative sign - the antiderivative of sine is negative cosine."
        },
        {
            question: "What is a definite integral?",
            choices: ["Antiderivative", "Net area under curve from a to b", "Derivative", "Limit"],
            correct: 1,
            explanation: "The definite integral ∫[a to b] f(x)dx represents the net signed area under f(x) from x=a to x=b."
        },
        {
            question: "What is the Fundamental Theorem of Calculus (Part 1)?",
            choices: ["Connects derivatives and integrals", "∫[a to b] f(x)dx = F(b) - F(a) where F' = f", "All functions are continuous", "Derivatives equal integrals"],
            correct: 1,
            explanation: "FTC Part 1 states: ∫[a to b] f(x)dx = F(b) - F(a), where F is any antiderivative of f. This connects integration with antidifferentiation."
        },
        {
            question: "What is ∫[0 to 2] x dx?",
            choices: ["2", "4", "x²/2", "2 - 0 = 2"],
            correct: 0,
            explanation: "∫[0 to 2] x dx = [x²/2] from 0 to 2 = (2²/2) - (0²/2) = 4/2 - 0 = 2."
        },
        {
            question: "If ∫[a to b] f(x)dx is negative, what does it mean?",
            choices: ["Error", "More area below x-axis than above", "Function is negative", "Bounds are wrong"],
            correct: 1,
            explanation: "A negative definite integral means there's more area below the x-axis than above (net signed area is negative)."
        },
        {
            question: "What is ∫[a to a] f(x)dx?",
            choices: ["f(a)", "0", "Undefined", "2a"],
            correct: 1,
            explanation: "When upper and lower limits are the same, the integral equals 0: ∫[a to a] f(x)dx = 0. No interval means no area."
        },
        {
            question: "What is the integral of a constant: ∫c dx?",
            choices: ["c", "cx + C", "0", "x + C"],
            correct: 1,
            explanation: "∫c dx = cx + C. Integrating a constant c gives cx plus the constant of integration."
        },
        {
            question: "What does ∫[a to b] f(x)dx = -∫[b to a] f(x)dx represent?",
            choices: ["Error", "Reversing limits changes sign", "Both equal 0", "Not true"],
            correct: 1,
            explanation: "Swapping integration limits changes the sign: ∫[a to b] = -∫[b to a]. This is a property of definite integrals."
        },
        {
            question: "What is u-substitution?",
            choices: ["Substituting u for x", "Chain Rule in reverse for integrals", "Changing variables randomly", "Integration by parts"],
            correct: 1,
            explanation: "U-substitution is the reverse of the Chain Rule, used to simplify integrals by substituting u = g(x), du = g'(x)dx."
        },

        // Advanced Topics (Questions 86-100)
        {
            question: "What is the Mean Value Theorem?",
            choices: ["Average value exists", "If f continuous on [a,b] and differentiable on (a,b), ∃c: f'(c)=(f(b)-f(a))/(b-a)", "Mean equals median", "Integrals equal derivatives"],
            correct: 1,
            explanation: "MVT states: for continuous f on [a,b] and differentiable on (a,b), there exists c in (a,b) where the instantaneous rate equals average rate: f'(c) = [f(b)-f(a)]/(b-a)."
        },
        {
            question: "What does the Mean Value Theorem guarantee?",
            choices: ["Function is linear", "Tangent line parallel to secant line exists", "Function has max/min", "Function is continuous"],
            correct: 1,
            explanation: "MVT guarantees there's at least one point where the tangent line (instantaneous rate) is parallel to the secant line connecting endpoints (average rate)."
        },
        {
            question: "What is Rolle's Theorem?",
            choices: ["Special case of MVT", "If f(a)=f(b), ∃c where f'(c)=0", "All derivatives are 0", "Functions roll over"],
            correct: 1,
            explanation: "Rolle's Theorem: if f is continuous on [a,b], differentiable on (a,b), and f(a)=f(b), then ∃c in (a,b) where f'(c)=0 (horizontal tangent exists)."
        },
        {
            question: "What is the average value of a function on [a,b]?",
            choices: ["[f(a)+f(b)]/2", "1/(b-a) ∫[a to b] f(x)dx", "∫[a to b] f(x)dx", "f((a+b)/2)"],
            correct: 1,
            explanation: "Average value of f on [a,b] is (1/(b-a)) ∫[a to b] f(x)dx - the integral divided by the interval length."
        },
        {
            question: "What is a Riemann sum?",
            choices: ["Type of derivative", "Approximation of definite integral using rectangles", "Infinite sum", "Type of limit"],
            correct: 1,
            explanation: "A Riemann sum approximates ∫[a to b] f(x)dx by dividing [a,b] into subintervals and summing areas of rectangles: Σf(x_i*)Δx."
        },
        {
            question: "What happens to Riemann sum as number of rectangles approaches infinity?",
            choices: ["Becomes 0", "Approaches exact definite integral", "Becomes undefined", "Stays constant"],
            correct: 1,
            explanation: "As n→∞, the Riemann sum converges to the exact definite integral: lim(n→∞) Σf(x_i*)Δx = ∫[a to b] f(x)dx."
        },
        {
            question: "What is Newton's Method used for?",
            choices: ["Finding derivatives", "Approximating roots/zeros of functions", "Finding integrals", "Testing continuity"],
            correct: 1,
            explanation: "Newton's Method iteratively approximates solutions to f(x)=0 using the formula: x_(n+1) = x_n - f(x_n)/f'(x_n)."
        },
        {
            question: "What is integration by parts based on?",
            choices: ["Chain Rule", "Product Rule", "Quotient Rule", "Power Rule"],
            correct: 1,
            explanation: "Integration by parts comes from the Product Rule: ∫u dv = uv - ∫v du. Used for products of functions."
        },
        {
            question: "What is the formula for integration by parts?",
            choices: ["∫fg dx = f∫g dx", "∫u dv = uv - ∫v du", "∫f/g dx = (∫f dx)/(∫g dx)", "∫f'g dx = fg"],
            correct: 1,
            explanation: "Integration by parts formula: ∫u dv = uv - ∫v du, where you choose u and dv from the integrand."
        },
        {
            question: "What is the area between two curves f(x) and g(x) from a to b?",
            choices: ["∫[a to b] [f(x) - g(x)] dx", "∫[a to b] f(x)dx - ∫[a to b] g(x)dx", "Both A and B (they're equivalent)", "Cannot be found"],
            correct: 2,
            explanation: "Area between curves = ∫[a to b] |f(x) - g(x)| dx (or [top - bottom] if you know which is higher). Both forms are equivalent."
        },
        {
            question: "What is the volume of a solid of revolution using disk method?",
            choices: ["π∫[a to b] r dx", "∫[a to b] πr² dx", "π∫[a to b] [f(x)]² dx", "Both B and C"],
            correct: 3,
            explanation: "Disk method volume (rotation about x-axis): V = π∫[a to b] [f(x)]² dx = ∫[a to b] πr² dx where r = f(x)."
        },
        {
            question: "What is exponential growth modeled by?",
            choices: ["y = mx + b", "y = Ce^(kt) where k > 0", "y = x²", "y = sin(x)"],
            correct: 1,
            explanation: "Exponential growth: y = Ce^(kt) where C is initial value and k > 0 is growth rate. Derivative dy/dt = ky (rate proportional to amount)."
        },
        {
            question: "What is exponential decay modeled by?",
            choices: ["y = Ce^(kt) where k < 0", "y = mx + b", "y = 1/x", "y = -x²"],
            correct: 0,
            explanation: "Exponential decay: y = Ce^(kt) where k < 0 is decay rate. Examples: radioactive decay, cooling, depreciation."
        },
        {
            question: "What is the derivative of ln(f(x))?",
            choices: ["1/f(x)", "f'(x)/f(x)", "ln(f'(x))", "1/x"],
            correct: 1,
            explanation: "Using Chain Rule: d/dx[ln(f(x))] = (1/f(x))·f'(x) = f'(x)/f(x). This is called logarithmic differentiation."
        },
        {
            question: "What is ∫[1/x] dx?",
            choices: ["ln(x) + C", "ln|x| + C", "x² + C", "-1/x² + C"],
            correct: 1,
            explanation: "∫(1/x) dx = ln|x| + C. We use absolute value because ln is only defined for positive numbers, but 1/x exists for all x ≠ 0."
        }
    ]
};

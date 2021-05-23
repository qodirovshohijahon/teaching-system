Best Practices for Unit Testing

See 4 - ND0067 FSJS C01 L03 A04 Best Practices With Unit Testing V1
#### Test Design Best Practices
Test file structure and file names should match the app.
Describe and name the tests to be easy to read and maintain.
Design app features with pseudo code to inform tests.
Pseudo code provides an overview of the application complexity and finds the easiest pieces of the test to write, build, refactor, and reiterate.

#### DRY (Don't Repeat Yourself)
Write short tests that allow you to pinpoint why the test is failing.
Try writing short, uncomplicated tests by first starting with an object with data that should pass and test each value in the object.
Try this again with an object with data that should fail unless the appropriate error is passed to ensure error handling is a standard, not an afterthought.

#### Tests should be reliable
Tests should only fail when there are bugs in the tested code.
Avoid conflicts with other tests.
Call the correct objects for each test. The wrong objects may have the wrong input and create an error.
Import the correct file for the test to avoid errors.

#### Further Reading
A lot goes into writing unit tests, and as you become more advanced, there is more to know about writing great unit tests. Here's a great article from Toptal by Sergey Kolodiy on unit testing: Unit Tests, How to Write Testable Code and Why it Matters.

Links 
- [x] https://www.toptal.com/qa/how-to-write-testable-code-and-why-it-matters
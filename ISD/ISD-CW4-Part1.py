class Module:
    def __init__(self, name, code):
        self.name = name
        self.code = code

    def getCode(self):
        return self.code

    def getName(self):
        return self.name

    def __repr__(self):
        return f'Module Name: {self.name}\n    Code: {self.code}'


# Child classes with calls to parent class
class InPerson(Module):
    def __init__(self, name, code, location):
        Module.__init__(self, name, code)
        self.location = location

    def getLocation(self):
        return self.location

    def __repr__(self):
        return f'Module Name: {self.name}\n    Code: {self.code}\n    Location: {self.location}'
	
	
class Online(Module):
    def __init__(self, name, code, url):
        Module.__init__(self, name, code)
        self.url = url

    def getLocation(self):
        return self.url

    def __repr__(self):
        return f'Module Name: {self.name}\n    Code: {self.code}\n    URL: {self.url}'


# Simple for loop to go over each module and 
# print everything from the __repr__ strings
def DisplayAllDetails(modules):
    for module in modules:
        print(module)

    
def TestModule():
    m = Module("Introduction to Software Development","BUC71")
    print(m)
    print("******")
    print(m.getName())
    print(m.getCode())

def TestOnline():
    s = Online("Programming Paradigms","BUC31", "http:\\www.moodle.ac.uk\pp.html")
    print(s)
    print("******")
    print(s.getName())
    print(s.getCode())
    print(s.getLocation())

	
def TestInPerson():
    s = InPerson("Advanced Data Structures","BUC22", "Main Building MAL211")
    print(s)
    print("******")
    print(s.getName())
    print(s.getCode())
    print(s.getLocation())
    
def TestFunctions():
    course = [InPerson("Advanced Data Structures","BUC22", "Main Building MAL211"),\
              Online("Programming Paradigms","BUC31", "http:\\www.moodle.ac.uk\pp.html"),\
              InPerson("Maths For Computing ","BUC14", "Main Building MAL303"),\
              InPerson("Web Applications","BUC54", "Senate House Room 23")]
    DisplayAllDetails(course)


# test calls

TestModule()
TestInPerson()
TestOnline()
TestFunctions()

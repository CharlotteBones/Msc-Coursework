#Q1a
def lifeStage(mammal, age):
    mammals = ["h","d"]
    ranges = [[0, 132,300,588],[0, 6,24,84]]
    outcomes = ["Juvenile","Adolescent","Mature","Senior"]
    feedback = [ "Not a valid mammal","Age is not a positive whole number", "Both inputs are not valid"]

#validity check using if statements before progressing the inputs further.
    if mammal not in mammals and age.isdigit() == False:
        return False, feedback[2]
    elif mammal not in mammals:
        return False, feedback[0]
    elif age.isdigit() == False:
        return False, feedback[1]

    age = int(age)
#Checking which list in ranges to use to parse into the for loop.
    if mammal == 'h':
        rangeList = 0
    else:
        rangeList = 1

#For loop with nested if statement to compare the age range to the given age and return a tuple.
    for x in ranges[rangeList]:
        index = ranges[rangeList].index(x) - 1
        if age < x:
            return True, outcomes[index]
    else:
        return True, outcomes[-1]

#Q1b
#If statement checking for the q is nested so that the code doesn't continue
def main():
    mammal = input("Please input the either (d)og or (h)uman ")
    if mammal != 'q':
        age = input("Please input the age in whole months ")
        if age != 'q':
            print(lifeStage(mammal, age))


main()


#Q2. (10 marks)
def interleaveIt(a,b):
#Empty list to store each iteration of x in a and b through the loop
    arangedList = []

    for x in range(len(a)):
        arangedList.append(a[x])
        arangedList.append(b[x])

    return arangedList

print(interleaveIt([1, 3,],[2, 4]))


# Q3a
def interleaveItAnyLength(a,b):
#If statements added to avoid index out of range errors
    arangedList = []

    for x in range(len(a) + len(b)):
        if x < len(a):
            arangedList.append(a[x])
        if x < len(b):
            arangedList.append(b[x])

    return arangedList


print(interleaveItAnyLength([1, 3, 5, 7], []))
print(interleaveItAnyLength([1,3,5,7],[2,4]))
print(interleaveItAnyLength([],[2,4]))

# Q3b
def interleaveAnyLength(a,b):

#Multiple elif branches to eliminate index out of range errors so that if there is no a or b or one ends the code can continue
    if len(a) > 0 and len(b) > 0:
        return [a[0]] + [b[0]] + interleaveAnyLength(a[1:],b[1:])
    elif len(a) > 0:
        return [a[0]] + interleaveAnyLength(a[1:],b)
    elif len(b) > 0:
        return [b[0]] + interleaveAnyLength(a, b[1:])
    else:
        return []


print(interleaveAnyLength([1, 3, 5, 7], []))
print(interleaveAnyLength([1,3,5,7],[2,4]))
print(interleaveAnyLength([],[2,4]))

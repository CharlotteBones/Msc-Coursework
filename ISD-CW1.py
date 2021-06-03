#1) Refactor the following conditional without using any boolean operators (note: this will increase the number of branches)

units = input("please input units, either miles or km ")
distance = int(input("please input the distance you wish to travel as a whole number "))

if units == 'miles':
  if distance > 100:
    print('Too Far')
  else:
    print('OK')
elif units == 'km':
  if distance > 161:
    print('Too Far')
  else:
    print('OK')


#2) Refactor the following code to reduce the number of  branches.

a = input("please input y or n or c:  ")
b = input("please input y or n or c:  ")

if a == "y":
  output = "OK"

elif a == "n" and b == "c":
  output = "OK"

else:
  output = "Not OK"
print(output)


#3)  Write your program below.

# A basic program to determine the life stages of either a dog or a 
# human using if-else statments and implements basic error checking.

mammal = input('Please input the either (d)og or (h)uman: ')
age = input('Please input the age in whole months: ')
lifeStage = ''

if mammal != 'd' and mammal != 'h':
  print('You have entered at least one input incorrectly')
elif age.isdigit() == False:
  print('You have entered at least one input incorrectly')
else:
  age = int(age)
  if mammal == 'h':
    if age < 132:
      lifeStage = 'Juvenile'
    elif age < 300:
      lifeStage = 'Adolescent'
    elif age < 588:
      lifeStage = 'Mature'
    else:
      lifeStage = 'Senior'

  elif mammal == 'd':
    if age < 6:
      lifeStage = 'Juvenile'
    elif age < 24:
      lifeStage = 'Adolescent'
    elif age < 84:
      lifeStage = 'Mature'
    else:
      lifeStage = 'Senior'

print(lifeStage)

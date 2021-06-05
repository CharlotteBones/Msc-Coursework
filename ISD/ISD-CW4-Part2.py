from tkinter import Frame, Button, Entry, Label, StringVar

class LifeStage(Frame):
    
    def __init__(self, master = None):

        
        Frame.__init__(self, master)
        self.pack()
        self.master.title("Lifestage Calculator")
        self.master.minsize(300, 200)

        #Private Instance variables to bind to the entry and label widgets
        self._entryMammal = StringVar()
        self._entryAge = StringVar()
        self._output = StringVar()
        self._resetButton = Button()

        #Fill in here all the the other widgets and private instance variables
        #you require

        header = Label(self, text='Welcome to the mammal lifestage calculator!' + 
            '\nPlease type in your query below then hit calculate')
        header.grid(column=0, row=0, columnspan=5)

        mammalLabel = Label(self, text='Mammal')
        mammalLabel.grid(column=0, row=1, sticky='E', pady=10)
        inputMammal = Entry(self, textvariable=self._entryMammal, width=20)
        inputMammal.grid(column=1, row=1, columnspan=2, sticky='W', pady=10)

        ageLabel = Label(self, text='Age in months')
        ageLabel.grid(column=0, row=2, sticky='NE')
        inputAge = Entry(self, textvariable=self._entryAge, width=10)
        inputAge.grid(column=1, row=2, sticky='NW')

        self._resetButton = Button(self, text="Reset", state='disabled', command=self.reset)
        self._resetButton.grid(column=0, row=4, pady=10)
        calcButton = Button(self, text="Calculate", command=self.calc)
        calcButton.grid(column=2, row=4, pady=10)

        output = Label(self, textvariable=self._output)
        output.grid(column=0, row=5, columnspan=5)

        #Key bindings for reset button and return key press

        inputAge.bind('<Return>', self.calc)
        inputAge.bind('<Key>', self.enable)
        inputMammal.bind('<Return>', self.calc)
        inputMammal.bind('<Key>', self.enable)
        
            

    #Add all methods you need here

    # Enable method called on keypress and checks for white space in 
    # input fields if there is anything _resetButton is enabled

    def enable(self, event):

        age = text=self._entryAge.get()
        mammal = text=self._entryMammal.get()
        if not age.isspace() or not mammal.isspace():
            self._resetButton.config(state='normal')


    # Calc method handles errors and finding the data 
    # and has an optional event argument for keypress calls
    # Reformatted from the functions in CW3

    def calc(self, event=None):

        ERROR_FEEDBACK_FILE =  "Data for this mammal not currently available."
        ERROR_FEEDBACK_AGE =  "Age is not a positive whole number." 
        SEPARATOR = '------'
        
        age = text=self._entryAge.get()
        mammal = text=self._entryMammal.get()
        lifestages = []
        thresholds = []

        # Try with handles opening and closing of file and 
        # checking if age is a number before progressing

        try:
            with open(f'data/{mammal}.dat', 'r') as infile:
                age = int(age)

                for line in infile:
                    lifestages.append(line.strip('\n'))

                idxSep = lifestages.index(SEPARATOR)
                thresholds = list(map(int, lifestages[:idxSep]))
                lifestages = lifestages[(idxSep + 1):]

                # For loop breaks and sets output once it finds the lifestage 
                # meeting the requirements to stop overwriting the output

                for stage in thresholds[::-1]:
                    if stage <= int(age):
                        idxStage = thresholds.index(stage)
                        self._output.set(lifestages[idxStage])
                        break

        except ValueError:
            self._output.set(ERROR_FEEDBACK_AGE)
        except FileNotFoundError:
            self._output.set(ERROR_FEEDBACK_FILE)


    # Reset completely resets the application

    def reset(self):
        self._entryMammal.set('')
        self._entryAge.set('')
        self._output.set('')
        self._resetButton.config(state='disabled')


if __name__ == "__main__":
    LifeStage().mainloop()

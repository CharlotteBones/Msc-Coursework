# I have read and understood the sections of plagiarism in the College Policy
# on assessment offences and confirm that the work is my own,
# with the work of others clearly acknowledged.
# I give my permission to submit my work to the plagiarism testing database
# that the College is using and test it using plagiarism detection software,
# search engines or meta-searching software.


# Charlotte Bones MSc Information Technology 14/02/2021


# Only write function definitions in this file


def LoadData(sPath,sName):
    lifestages = []
    thresholds = []
    SEPARATOR = '------'

    infile = open(f'{sPath}/{sName}.dat', 'r')

    # looping through the file and adding the individual elements to a list
    for line in infile:
        lifestages.append(line.strip('\n'))

    # finding index of the separator and using it to slice and assign the correct values
    idxSep = lifestages.index(SEPARATOR)
    thresholds = list(map(int, lifestages[:idxSep]))
    lifestages = lifestages[(idxSep + 1):]

    infile.close()
    
    return (thresholds, lifestages)
    

def GetlifeStage(thresholds, lifestages, age):
   
   # Looping backwards through list to check if age is greater than value
   # Finding index of value to return the corresponding lifestage
    for stage in thresholds[::-1]:
        if stage <= age:
            idxStage = thresholds.index(stage)

            return lifestages[idxStage]



def ProcessQuery(mammal, query):
    ERROR_FEEDBACK_FILE =  "Data for this mammal not currently available."
    ERROR_FEEDBACK_AGE =  "Age is not a positive whole number."  
    DATA_PATH = "Data"
    
    # Using try statement to call the LoadData and GetlifeStage functions
    # Returning result or relevant error 
    try:
        query = int(query)
        thresholds, lifestages = LoadData(DATA_PATH, mammal)
        result = GetlifeStage(thresholds, lifestages, query)
    except ValueError:
        return ERROR_FEEDBACK_AGE
    except FileNotFoundError:
        return ERROR_FEEDBACK_FILE

    return result


def ProcessBatch(filename):

    # Using try statement to handle file processing opening and closing
    try:
        with open(f'{filename}.dat', 'r') as inBatch:
            with open(f'{filename}out.dat', 'a') as outBatch:
                
                # For loop used to split up lines into lists and processed
                # Results then written into the outBatch file.
                for line in inBatch:
                    queries = line.split(' ')
                    userID = queries[0] 
                    result = ProcessQuery(queries[1], queries[2])
                    outBatch.write(f'{userID} {result}\n')

    except:
        return 'Could not process file'
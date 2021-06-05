from term2cw1 import *

(thresholds, lifestages) = LoadData("Data","Dog")

if thresholds == [0, 6, 24, 84] :
    print("Step 1 Success! - thresholds")
else:
    print("Step 1 Failed - thresholds")

if lifestages ==  ['Juvenile', 'Adolescent', 'Mature', 'Senior']:
    print("Step 1 Success! - lifestages")
else:
    print("Step 1 Failed - lifestages")


lifestage = GetlifeStage(thresholds, lifestages, 24)
if lifestage == "Mature":
    print("Step 2 Success! - Outcome")
else:
    print("Step 2 Failed - Outcome")

if (ProcessQuery("Dog","84")) == "Senior":
    print("Step 3 Success! - Outcome")
else:
    print("Step 3 Failed - Outcome")

ProcessBatch("BatchQueries")




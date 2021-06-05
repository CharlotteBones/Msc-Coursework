RUN_TEST_SCRIPT = 0
RUN_DEVELOPMENT_SCRIPT = 1


#You may change Line 6 only.
runScript = RUN_TEST_SCRIPT 
# change to RUN_DEVELOPMENT_SCRIPT for Development



if runScript == RUN_TEST_SCRIPT:
  import testscript
else:
  import DevelopmentScript
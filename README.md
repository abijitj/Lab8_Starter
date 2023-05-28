# Lab 8 - Starter

1. I would say, within a GitHub action that runs whenever code is pushed. This way, all tests would be automatic. Moreover, they would only be run when a change is made (i.e. when something is pushed into the repo). The second option is less desirable because we would have to manually run the tests rather than automating the process. The third option is not ideal because it is important to test throughout the development process and not just at the end. 

2. No, I would not use E2E testing. This seems more appropriate for a unit test. 

3. I don't think I would use a unit test to test a "message" feature because it seems like there are several moving parts in writing, sending and receiving a message. This would require E2E testing or perhaps multiple units tests. 

4. This feature seems appropriate to test with unit tests because it is a relatively small feature that can be thorougly tested with a few unit tests. 


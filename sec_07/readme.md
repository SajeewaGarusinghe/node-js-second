[![MVC Logo](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcrcEcAb6BD4JsjVBPMo73e63AfIXak9qXlogJTJ0QZ3ouXyYORK2zzvEvAsaG3MMsJic&usqp=CAU)]

That's it for this module. You learned about the important MVC pattern and there the model serves the purpose
of representing our data and of managing our data, saving it, fetching it, later also updating it and so
on. 

**And it doesn't matter if you manage your data in memory, files or databases,it is the model which is responsible for your data,
it contains all the data related logic.**

**The view on the other hand is responsible for presenting it to the user, is responsible for what the
user sees and it shouldn't contain too much logic which might remind you of the handlebars templating
engine which kind of forced you to not put too much logic into there.**

With ejs, the templating engine I'm using here,you can put more logic into the view and you should always well try to find your own personal balance.Some people want to have a super pure approach, other people like me are fine with a little bit of logic
in the templates but you should definitely not put too much in there,

**your logic should be in the model or partly in the controller because the controller should do everything that needs to be done to connect your model and the view,so to get the data from A to B and that can involve both directions. It can mean that through your view,through a form,some data was sent to your node express application and you now need to send that to the model to save it**

there or it can of course mean you're fetching data from the model or via the model and send that into a view
which is then returned to the user.

## Module summary

[![Express Logo](https://github.com/SajeewaGarusinghe/node-js-second/blob/main/sec_07/MVC.png)]

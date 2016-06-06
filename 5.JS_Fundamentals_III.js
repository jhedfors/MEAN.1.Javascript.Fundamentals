function personConsructer(name){
  var person = {
    name:name,
    distance_traveled:0,
    say_name: function(){ console.log(this.name)},
    say_something:function(phrase){console.log(this.name+' thinks '+phrase)},
    walk:function(){console.log(this.name +' is walking'); this.distance_traveled+=3;} ,
    run: function(){console.log(this.name +' is running'); this.distance_traveled+=10;},
    crawl:function(){console.log(this.name +' is crawling'); this.distance_traveled+=1;},
    }
  return person;
}
var jay = personConsructer('Jay');
console.log(jay);
jay.say_name();
jay.walk();
console.log(jay.distance_traveled);
jay.run();
console.log(jay.distance_traveled);
jay.crawl();
console.log(jay.distance_traveled);

function ninjaConstructor (name,cohort){
  var ninja = {
    name:name,
    cohort:cohort,
    belt_level:0,
    status:function(){
      var belt_name = ['yellow','red','black'];
      console.log(name +" is now a "+belt_name[ninja.belt_level]+'belt!');
      },
    levelUp:function(){
      ninja.belt_level+=1;
      ninja.status();
      },
    }
  ninja.status();
  return ninja;
}

var jeff = ninjaConstructor('Jeff','April');
jeff.levelUp();
jeff.levelUp();

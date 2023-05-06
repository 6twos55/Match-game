let body = document.querySelector('body');
let info = document.querySelector('.infobox');
let level = document.querySelector('.lvlcount');
const cover = document.querySelector('.cover');
let feed = document.querySelector('.feed');
let next = document.querySelector('.next');
const congrats = document.querySelector('.congratsCover');


// Creating html elements and assigning classes and values to them

let item1 = document.createElement('div');
item1.classList.add('item1');
item1.innerHTML = "One";

let item2 = document.createElement('div');
item2.classList.add('item2');
item2.innerHTML = "Two";

let item3 = document.createElement('div');
item3.classList.add('item3');
item3.innerHTML = "Three";

// putting created elements in parent element
cover.appendChild(item1);
cover.appendChild(item2);
cover.appendChild(item3);


// makes buttons disappear
feed.classList.add('disappear');
next.classList.add('disappear');

//makes congrats div disappear
congrats.classList.add('hide');


item1.addEventListener('click', (e)=>{

  item1.classList.add('rotate');

  // change the content of the info box
  info.innerHTML = "&#x1F6C8; Choose a match 😦";

  // giving color stylings if item1 was the first clicked item
  item1.style.backgroundColor = 'green';
  item1.style.color = 'white';

  // removing the disappear classlist to make the button visible
  feed.classList.remove('disappear');

  // the page is reloaded if this button is clicked, it serves as a start over button at this point
  feed.addEventListener('click', ()=>{
    window.location.reload();
  });

  // Message if the user clicks the same card again
  item1.addEventListener('click', (e)=>{
      alert("Click another card 🤌");
  })

  // if item3 is clicked after item1 is clicked...
item3.addEventListener('click', (e)=>{

  // giving the background a greenish background
  body.style.backgroundColor = "#a3f9a3";

  // change the content of the info box and edit the colors
  info.innerHTML = "&#x1F6C8; Correct match 👍";
  info.style.color = "green";

  // giving styles if this item is clicked after item1, this is the correct option
  item3.style.backgroundColor = 'green';
  item3.style.color = 'white';
  console.log('Match successful');

  // disabling cursor events to prevent clicking after a match-up
  item1.classList.add('disable');
  item2.classList.add('disable');
  item3.classList.add('disable');

  // the page is reloaded if this button is clicked, serves as a play again button at this point
  feed.innerHTML = 'Restart';
  feed.style.backgroundColor = "#005400";
  feed.addEventListener('click', (e)=>{
      window.location.reload();
  });

  // make button visible
  next.classList.remove('disappear');
  //=================================== takes player to next level ========================================

  next.addEventListener('click', (e)=>{

      // reset body color
      body.style.backgroundColor = "#dbdbff";

      // changes the numbers on the level count
      level.innerHTML = "(LVL 02 OF 02)";

      // reset info styles and text
      info.innerHTML = "&#x1F6C8; Choose a card 🤞";
      info.style.color = "";

      // remove buttons
      feed.classList.add('disappear');
      next.classList.add('disappear'); 
    
      // creating html elements and assigning classes and values to them

      let item1 = document.createElement('div');
      item1.classList.add('item1');
      item1.innerHTML = "One";
    
      let item2 = document.createElement('div');
      item2.classList.add('item2');
      item2.innerHTML = "Two";
    
      let item3 = document.createElement('div');
      item3.classList.add('item3');
      item3.innerHTML = "Three";
    
      
      let item4 = document.createElement('div');
      item4.classList.add('item4');
      item4.innerHTML = "Four";
      
      let item5 = document.createElement('div');
      item5.classList.add('item5');
      item5.innerHTML = "Five";
      
      let item6 = document.createElement('div');
      item6.classList.add('item6');
      item6.innerHTML = "Six";
      
      
      // putting created elements in parent element
      cover.innerHTML = "";
      cover.appendChild(item1);
      cover.appendChild(item2);
      cover.appendChild(item3);
      cover.appendChild(item4);
      cover.appendChild(item5);
      cover.appendChild(item6);
    
    
    
    
      
      item1.addEventListener('click', (e)=>{

        item1.classList.add('rotate');
      
        // change the content of the info box
        info.innerHTML = "&#x1F6C8; Choose a match 😦";
      
        // giving color stylings if item1 was the first clicked item
        item1.style.backgroundColor = 'green';
        item1.style.color = 'white';
      
        // Message if the user clicks the same card again
        item1.addEventListener('click', (e)=>{
            alert("Click another card 🤌");
        })
      
        // if item5 is clicked after item1 is clicked...
        item5.addEventListener('click', (e)=>{
      
          // giving the background a greenish background
          body.style.backgroundColor = "#a3f9a3";
    
          // change the content of the info box and edit the colors
          info.innerHTML = "&#x1F6C8; Correct match 👍";
          info.style.color = "green";
    
          // giving styles if this item is clicked after item1, this is the correct option
          item5.style.backgroundColor = 'green';
          item5.style.color = 'white';
          console.log('Match successful');
    
          // disabling cursor events to prevent clicking after a match-up
          item1.classList.add('disable');
          item2.classList.add('disable');
          item3.classList.add('disable');
          item4.classList.add('disable');
          item5.classList.add('disable');
          item6.classList.add('disable');
    
    
          // shows congrats page 
          next.innerHTML = 'Proceed';
          next.classList.remove('disappear');
          next.addEventListener('click', (e)=>{
            level.classList.add('hide');
            info.classList.add('hide');
            cover.classList.add('hide');
            congrats.classList.remove('hide');
          });

        });
      
        // if item2 is clicked after item1 is clicked...
        item2.addEventListener('click', (e)=>{
      
          // giving the background a reddish background
          body.style.backgroundColor = "#ffb1b1";
    
          // change the content of the info box and edit the colors
          info.innerHTML = "&#x1F6C8; Wrong match 🤪";
          info.style.color = "red";
          
          // giving styles if this item is clicked after item1, this is the wrong option
          item1.style.backgroundColor = 'red';
          item1.style.color = 'white';
          item2.style.backgroundColor = 'red';
          item2.style.color = 'white';
          console.log('Wrong match');
    
          // disabling cursor events to prevent clicking after a match-up
          item1.classList.add('disable');
          item2.classList.add('disable');
          item3.classList.add('disable');
          item4.classList.add('disable');
          item5.classList.add('disable');
          item6.classList.add('disable');
    
          // the page is reloaded if this button is clicked, serves as a try again button at this point
          feed.classList.remove('disappear');
          feed.innerHTML = 'To Lvl 1';
          feed.style.backgroundColor = "#c30101";
          feed.addEventListener('click', ()=>{
              window.location.reload();
          });
      
        });
    
        // if item3 is clicked after item1 is clicked...
        item3.addEventListener('click', (e)=>{
      
          // giving the background a reddish background
          body.style.backgroundColor = "#ffb1b1";
    
          // change the content of the info box and edit the colors
          info.innerHTML = "&#x1F6C8; Wrong match 🤪";
          info.style.color = "red";
          
          // giving styles if this item is clicked after item1, this is the wrong option
          item1.style.backgroundColor = 'red';
          item1.style.color = 'white';
          item3.style.backgroundColor = 'red';
          item3.style.color = 'white';
          console.log('Wrong match');
    
          // disabling cursor events to prevent clicking after a match-up
          item1.classList.add('disable');
          item2.classList.add('disable');
          item3.classList.add('disable');
          item4.classList.add('disable');
          item5.classList.add('disable');
          item6.classList.add('disable');
    
          // the page is reloaded if this button is clicked, serves as a try again button at this point
          feed.classList.remove('disappear');
          feed.innerHTML = 'To Lvl 1';
          feed.style.backgroundColor = "#c30101";
          feed.addEventListener('click', ()=>{
              window.location.reload();
          });
      
        });
    
        // if item4 is clicked after item1 is clicked...
        item4.addEventListener('click', (e)=>{
      
          // giving the background a reddish background
          body.style.backgroundColor = "#ffb1b1";
    
          // change the content of the info box and edit the colors
          info.innerHTML = "&#x1F6C8; Wrong match 🤪";
          info.style.color = "red";
          
          // giving styles if this item is clicked after item1, this is the wrong option
          item1.style.backgroundColor = 'red';
          item1.style.color = 'white';
          item4.style.backgroundColor = 'red';
          item4.style.color = 'white';
          console.log('Wrong match');
    
          // disabling cursor events to prevent clicking after a match-up
          item1.classList.add('disable');
          item2.classList.add('disable');
          item3.classList.add('disable');
          item4.classList.add('disable');
          item5.classList.add('disable');
          item6.classList.add('disable');
    
          // the page is reloaded if this button is clicked, serves as a try again button at this point
          feed.classList.remove('disappear');
          feed.innerHTML = 'To Lvl 1';
          feed.style.backgroundColor = "#c30101";
          feed.addEventListener('click', ()=>{
              window.location.reload();
          });
      
        });
    
        // if item6 is clicked after item1 is clicked...
        item6.addEventListener('click', (e)=>{
      
          // giving the background a reddish background
          body.style.backgroundColor = "#ffb1b1";
    
          // change the content of the info box and edit the colors
          info.innerHTML = "&#x1F6C8; Wrong match 🤪";
          info.style.color = "red";
          
          // giving styles if this item is clicked after item1, this is the wrong option
          item1.style.backgroundColor = 'red';
          item1.style.color = 'white';
          item6.style.backgroundColor = 'red';
          item6.style.color = 'white';
          console.log('Wrong match');
    
          // disabling cursor events to prevent clicking after a match-up
          item1.classList.add('disable');
          item2.classList.add('disable');
          item3.classList.add('disable');
          item4.classList.add('disable');
          item5.classList.add('disable');
          item6.classList.add('disable');
    
          // the page is reloaded if this button is clicked, serves as a try again button at this point
          feed.classList.remove('disappear');
          feed.innerHTML = 'To Lvl 1';
          feed.style.backgroundColor = "#c30101";
          feed.addEventListener('click', ()=>{
              window.location.reload();
          });
      
        });
      
      });
      
      
      item2.addEventListener('click', (e)=>{

        item2.classList.add('rotate');
      
        // change the content of the info box
        info.innerHTML = "&#x1F6C8; Choose a match 😦";
      
        // giving color stylings if item2 was the first clicked item
        item2.style.backgroundColor = 'green';
        item2.style.color = 'white';
      
        // Message if the user clicks the same card again
        item2.addEventListener('click', (e)=>{
            alert("Click another card 🤌");
        })
      
        // if item4 is clicked after item2 is clicked...
        item4.addEventListener('click', (e)=>{
      
          // giving the background a greenish background
          body.style.backgroundColor = "#a3f9a3";
    
          // change the content of the info box and edit the colors
          info.innerHTML = "&#x1F6C8; Correct match 👍";
          info.style.color = "green";
    
          // giving styles if this item is clicked after item2, this is the correct option
          item4.style.backgroundColor = 'green';
          item4.style.color = 'white';
          console.log('Match successful');
    
          // disabling cursor events to prevent clicking after a match-up
          item1.classList.add('disable');
          item2.classList.add('disable');
          item3.classList.add('disable');
          item4.classList.add('disable');
          item5.classList.add('disable');
          item6.classList.add('disable');
    
    
          // shows congrats page 
          next.innerHTML = 'Proceed';
          next.classList.remove('disappear');
          next.addEventListener('click', (e)=>{
            level.classList.add('hide');
            info.classList.add('hide');
            cover.classList.add('hide');
            congrats.classList.remove('hide');
          });
      
        });
      
        // if item1 is clicked after item2 is clicked...
        item1.addEventListener('click', (e)=>{
      
          // giving the background a reddish background
          body.style.backgroundColor = "#ffb1b1";
    
          // change the content of the info box and edit the colors
          info.innerHTML = "&#x1F6C8; Wrong match 🤪";
          info.style.color = "red";
          
          // giving styles if this item is clicked after item1, this is the wrong option
          item2.style.backgroundColor = 'red';
          item2.style.color = 'white';
          item1.style.backgroundColor = 'red';
          item1.style.color = 'white';
          console.log('Wrong match');
    
          // disabling cursor events to prevent clicking after a match-up
          item1.classList.add('disable');
          item2.classList.add('disable');
          item3.classList.add('disable');
          item4.classList.add('disable');
          item5.classList.add('disable');
          item6.classList.add('disable');
    
          // the page is reloaded if this button is clicked, serves as a try again button at this point
          feed.classList.remove('disappear');
          feed.innerHTML = 'To Lvl 1';
          feed.style.backgroundColor = "#c30101";
          feed.addEventListener('click', ()=>{
              window.location.reload();
          });
      
        });
    
        // if item3 is clicked after item2 is clicked...
        item3.addEventListener('click', (e)=>{
      
          // giving the background a reddish background
          body.style.backgroundColor = "#ffb1b1";
    
          // change the content of the info box and edit the colors
          info.innerHTML = "&#x1F6C8; Wrong match 🤪";
          info.style.color = "red";
          
          // giving styles if this item is clicked after item2, this is the wrong option
          item2.style.backgroundColor = 'red';
          item2.style.color = 'white';
          item3.style.backgroundColor = 'red';
          item3.style.color = 'white';
          console.log('Wrong match');
    
          // disabling cursor events to prevent clicking after a match-up
          item1.classList.add('disable');
          item2.classList.add('disable');
          item3.classList.add('disable');
          item4.classList.add('disable');
          item5.classList.add('disable');
          item6.classList.add('disable');
    
          // the page is reloaded if this button is clicked, serves as a try again button at this point
          feed.classList.remove('disappear');
          feed.innerHTML = 'To Lvl 1';
          feed.style.backgroundColor = "#c30101";
          feed.addEventListener('click', ()=>{
              window.location.reload();
          });
      
        });
    
        // if item5 is clicked after item2 is clicked...
        item5.addEventListener('click', (e)=>{
      
          // giving the background a reddish background
          body.style.backgroundColor = "#ffb1b1";
    
          // change the content of the info box and edit the colors
          info.innerHTML = "&#x1F6C8; Wrong match 🤪";
          info.style.color = "red";
          
          // giving styles if this item is clicked after item2, this is the wrong option
          item2.style.backgroundColor = 'red';
          item2.style.color = 'white';
          item5.style.backgroundColor = 'red';
          item5.style.color = 'white';
          console.log('Wrong match');
    
          // disabling cursor events to prevent clicking after a match-up
          item1.classList.add('disable');
          item2.classList.add('disable');
          item3.classList.add('disable');
          item4.classList.add('disable');
          item5.classList.add('disable');
          item6.classList.add('disable');
    
          // the page is reloaded if this button is clicked, serves as a try again button at this point
          feed.classList.remove('disappear');
          feed.innerHTML = 'To Lvl 1';
          feed.style.backgroundColor = "#c30101";
          feed.addEventListener('click', ()=>{
              window.location.reload();
          });
      
        });
    
        // if item6 is clicked after item2 is clicked...
        item6.addEventListener('click', (e)=>{
      
          // giving the background a reddish background
          body.style.backgroundColor = "#ffb1b1";
    
          // change the content of the info box and edit the colors
          info.innerHTML = "&#x1F6C8; Wrong match 🤪";
          info.style.color = "red";
          
          // giving styles if this item is clicked after item2, this is the wrong option
          item2.style.backgroundColor = 'red';
          item2.style.color = 'white';
          item6.style.backgroundColor = 'red';
          item6.style.color = 'white';
          console.log('Wrong match');
    
          // disabling cursor events to prevent clicking after a match-up
          item1.classList.add('disable');
          item2.classList.add('disable');
          item3.classList.add('disable');
          item4.classList.add('disable');
          item5.classList.add('disable');
          item6.classList.add('disable');
    
          // the page is reloaded if this button is clicked, serves as a try again button at this point
          feed.classList.remove('disappear');
          feed.innerHTML = 'To Lvl 1';
          feed.style.backgroundColor = "#c30101";
          feed.addEventListener('click', ()=>{
              window.location.reload();
          });
      
        });
      
      });
      
      
      item3.addEventListener('click', (e)=>{

        item3.classList.add('rotate');
      
        // change the content of the info box
        info.innerHTML = "&#x1F6C8; Choose a match 😦";
      
        // giving color stylings if item3 was the first clicked item
        item3.style.backgroundColor = 'green';
        item3.style.color = 'white';
      
        // Message if the user clicks the same card again
        item3.addEventListener('click', (e)=>{
            alert("Click another card 🤌");
        })
      
        // if item5 is clicked after item3 is clicked...
        item5.addEventListener('click', (e)=>{
      
          // giving the background a greenish background
          body.style.backgroundColor = "#a3f9a3";
    
          // change the content of the info box and edit the colors
          info.innerHTML = "&#x1F6C8; Correct match 👍";
          info.style.color = "green";
    
          // giving styles if this item is clicked after item3, this is the correct option
          item5.style.backgroundColor = 'green';
          item5.style.color = 'white';
          console.log('Match successful');
    
          // disabling cursor events to prevent clicking after a match-up
          item1.classList.add('disable');
          item2.classList.add('disable');
          item3.classList.add('disable');
          item4.classList.add('disable');
          item5.classList.add('disable');
          item6.classList.add('disable');
    
    
          // shows congrats page 
          next.innerHTML = 'Proceed';
          next.classList.remove('disappear');
          next.addEventListener('click', (e)=>{
            level.classList.add('hide');
            info.classList.add('hide');
            cover.classList.add('hide');
            congrats.classList.remove('hide');
          });
      
        });
      
        // if item2 is clicked after item3 is clicked...
        item2.addEventListener('click', (e)=>{
      
          // giving the background a reddish background
          body.style.backgroundColor = "#ffb1b1";
    
          // change the content of the info box and edit the colors
          info.innerHTML = "&#x1F6C8; Wrong match 🤪";
          info.style.color = "red";
          
          // giving styles if this item is clicked after item3, this is the wrong option
          item3.style.backgroundColor = 'red';
          item3.style.color = 'white';
          item2.style.backgroundColor = 'red';
          item2.style.color = 'white';
          console.log('Wrong match');
    
          // disabling cursor events to prevent clicking after a match-up
          item1.classList.add('disable');
          item2.classList.add('disable');
          item3.classList.add('disable');
          item4.classList.add('disable');
          item5.classList.add('disable');
          item6.classList.add('disable');
    
          // the page is reloaded if this button is clicked, serves as a try again button at this point
          feed.classList.remove('disappear');
          feed.innerHTML = 'To Lvl 1';
          feed.style.backgroundColor = "#c30101";
          feed.addEventListener('click', ()=>{
              window.location.reload();
          });
      
        });
    
        // if item1 is clicked after item3 is clicked...
        item1.addEventListener('click', (e)=>{
      
          // giving the background a reddish background
          body.style.backgroundColor = "#ffb1b1";
    
          // change the content of the info box and edit the colors
          info.innerHTML = "&#x1F6C8; Wrong match 🤪";
          info.style.color = "red";
          
          // giving styles if this item is clicked after item1, this is the wrong option
          item3.style.backgroundColor = 'red';
          item3.style.color = 'white';
          item1.style.backgroundColor = 'red';
          item1.style.color = 'white';
          console.log('Wrong match');
    
          // disabling cursor events to prevent clicking after a match-up
          item1.classList.add('disable');
          item2.classList.add('disable');
          item3.classList.add('disable');
          item4.classList.add('disable');
          item5.classList.add('disable');
          item6.classList.add('disable');
    
          // the page is reloaded if this button is clicked, serves as a try again button at this point
          feed.classList.remove('disappear');
          feed.innerHTML = 'To Lvl 1';
          feed.style.backgroundColor = "#c30101";
          feed.addEventListener('click', ()=>{
              window.location.reload();
          });
      
        });
    
        // if item4 is clicked after item3 is clicked...
        item4.addEventListener('click', (e)=>{
      
          // giving the background a reddish background
          body.style.backgroundColor = "#ffb1b1";
    
          // change the content of the info box and edit the colors
          info.innerHTML = "&#x1F6C8; Wrong match 🤪";
          info.style.color = "red";
          
          // giving styles if this item is clicked after item3, this is the wrong option
          item3.style.backgroundColor = 'red';
          item3.style.color = 'white';
          item4.style.backgroundColor = 'red';
          item4.style.color = 'white';
          console.log('Wrong match');
    
          // disabling cursor events to prevent clicking after a match-up
          item1.classList.add('disable');
          item2.classList.add('disable');
          item3.classList.add('disable');
          item4.classList.add('disable');
          item5.classList.add('disable');
          item6.classList.add('disable');
    
          // the page is reloaded if this button is clicked, serves as a try again button at this point
          feed.classList.remove('disappear');
          feed.innerHTML = 'To Lvl 1';
          feed.style.backgroundColor = "#c30101";
          feed.addEventListener('click', ()=>{
            window.location.reload();
          });
      
        });
    
        // if item6 is clicked after item3 is clicked...
        item6.addEventListener('click', (e)=>{
      
          // giving the background a reddish background
          body.style.backgroundColor = "#ffb1b1";
    
          // change the content of the info box and edit the colors
          info.innerHTML = "&#x1F6C8; Wrong match 🤪";
          info.style.color = "red";
          
          // giving styles if this item is clicked after item3, this is the wrong option
          item3.style.backgroundColor = 'red';
          item3.style.color = 'white';
          item6.style.backgroundColor = 'red';
          item6.style.color = 'white';
          console.log('Wrong match');
    
          // disabling cursor events to prevent clicking after a match-up
          item1.classList.add('disable');
          item2.classList.add('disable');
          item3.classList.add('disable');
          item4.classList.add('disable');
          item5.classList.add('disable');
          item6.classList.add('disable');
    
          // the page is reloaded if this button is clicked, serves as a try again button at this point
          feed.classList.remove('disappear');
          feed.innerHTML = 'To Lvl 1';
          feed.style.backgroundColor = "#c30101";
          feed.addEventListener('click', ()=>{
              window.location.reload();
          });
      
        });
      
      });
    
    
      item4.addEventListener('click', (e)=>{

        item4.classList.add('rotate');
      
        // change the content of the info box
        info.innerHTML = "&#x1F6C8; Choose a match 😦";
      
        // giving color stylings if item4 was the first clicked item
        item4.style.backgroundColor = 'green';
        item4.style.color = 'white';
      
        // Message if the user clicks the same card again
        item4.addEventListener('click', (e)=>{
            alert("Click another card 🤌");
        })
      
        // if item6 is clicked after item4 is clicked...
        item6.addEventListener('click', (e)=>{
      
          // giving the background a greenish background
          body.style.backgroundColor = "#a3f9a3";
    
          // change the content of the info box and edit the colors
          info.innerHTML = "&#x1F6C8; Correct match 👍";
          info.style.color = "green";
    
          // giving styles if this item is clicked after item4, this is the correct option
          item6.style.backgroundColor = 'green';
          item6.style.color = 'white';
          console.log('Match successful');
    
          // disabling cursor events to prevent clicking after a match-up
          item1.classList.add('disable');
          item2.classList.add('disable');
          item3.classList.add('disable');
          item4.classList.add('disable');
          item5.classList.add('disable');
          item6.classList.add('disable');
    
    
          // shows congrats page 
          next.innerHTML = 'Proceed';
          next.classList.remove('disappear');
          next.addEventListener('click', (e)=>{
            level.classList.add('hide');
            info.classList.add('hide');
            cover.classList.add('hide');
            congrats.classList.remove('hide');
          });
      
        });
      
        // if item2 is clicked after item4 is clicked...
        item2.addEventListener('click', (e)=>{
      
          // giving the background a reddish background
          body.style.backgroundColor = "#ffb1b1";
    
          // change the content of the info box and edit the colors
          info.innerHTML = "&#x1F6C8; Wrong match 🤪";
          info.style.color = "red";
          
          // giving styles if this item is clicked after item4, this is the wrong option
          item4.style.backgroundColor = 'red';
          item4.style.color = 'white';
          item2.style.backgroundColor = 'red';
          item2.style.color = 'white';
          console.log('Wrong match');
    
          // disabling cursor events to prevent clicking after a match-up
          item1.classList.add('disable');
          item2.classList.add('disable');
          item3.classList.add('disable');
          item4.classList.add('disable');
          item5.classList.add('disable');
          item6.classList.add('disable');
    
          // the page is reloaded if this button is clicked, serves as a try again button at this point
          feed.classList.remove('disappear');
          feed.innerHTML = 'To Lvl 1';
          feed.style.backgroundColor = "#c30101";
          feed.addEventListener('click', ()=>{
              window.location.reload();
          });
      
        });
    
        // if item3 is clicked after item4 is clicked...
        item3.addEventListener('click', (e)=>{
      
          // giving the background a reddish background
          body.style.backgroundColor = "#ffb1b1";
    
          // change the content of the info box and edit the colors
          info.innerHTML = "&#x1F6C8; Wrong match 🤪";
          info.style.color = "red";
          
          // giving styles if this item is clicked after item4, this is the wrong option
          item4.style.backgroundColor = 'red';
          item4.style.color = 'white';
          item3.style.backgroundColor = 'red';
          item3.style.color = 'white';
          console.log('Wrong match');
    
          // disabling cursor events to prevent clicking after a match-up
          item1.classList.add('disable');
          item2.classList.add('disable');
          item3.classList.add('disable');
          item4.classList.add('disable');
          item5.classList.add('disable');
          item6.classList.add('disable');
    
          // the page is reloaded if this button is clicked, serves as a try again button at this point
          feed.classList.remove('disappear');
          feed.innerHTML = 'To Lvl 1';
          feed.style.backgroundColor = "#c30101";
          feed.addEventListener('click', ()=>{
              window.location.reload();
          });
      
        });
    
        // if item4 is clicked after item4 is clicked...
        item1.addEventListener('click', (e)=>{
      
          // giving the background a reddish background
          body.style.backgroundColor = "#ffb1b1";
    
          // change the content of the info box and edit the colors
          info.innerHTML = "&#x1F6C8; Wrong match 🤪";
          info.style.color = "red";
          
          // giving styles if this item is clicked after item1, this is the wrong option
          item4.style.backgroundColor = 'red';
          item4.style.color = 'white';
          item1.style.backgroundColor = 'red';
          item1.style.color = 'white';
          console.log('Wrong match');
    
          // disabling cursor events to prevent clicking after a match-up
          item1.classList.add('disable');
          item2.classList.add('disable');
          item3.classList.add('disable');
          item4.classList.add('disable');
          item5.classList.add('disable');
          item6.classList.add('disable');
    
          // the page is reloaded if this button is clicked, serves as a try again button at this point
          feed.classList.remove('disappear');
          feed.innerHTML = 'To Lvl 1';
          feed.style.backgroundColor = "#c30101";
          feed.addEventListener('click', ()=>{
              window.location.reload();
          });
      
        });
    
        // if item6 is clicked after item4 is clicked...
        item5.addEventListener('click', (e)=>{
      
          // giving the background a reddish background
          body.style.backgroundColor = "#ffb1b1";
    
          // change the content of the info box and edit the colors
          info.innerHTML = "&#x1F6C8; Wrong match 🤪";
          info.style.color = "red";
          
          // giving styles if this item is clicked after item4, this is the wrong option
          item4.style.backgroundColor = 'red';
          item4.style.color = 'white';
          item5.style.backgroundColor = 'red';
          item5.style.color = 'white';
          console.log('Wrong match');
    
          // disabling cursor events to prevent clicking after a match-up
          item1.classList.add('disable');
          item2.classList.add('disable');
          item3.classList.add('disable');
          item4.classList.add('disable');
          item5.classList.add('disable');
          item6.classList.add('disable');
    
          // the page is reloaded if this button is clicked, serves as a try again button at this point
          feed.classList.remove('disappear');
          feed.innerHTML = 'To Lvl 1';
          feed.style.backgroundColor = "#c30101";
          feed.addEventListener('click', ()=>{
              window.location.reload();
          });
      
        });
      
      });
    
    
      item5.addEventListener('click', (e)=>{

        item5.classList.add('rotate');
      
        // change the content of the info box
        info.innerHTML = "&#x1F6C8; Choose a match 😦";
      
        // giving color stylings if item5 was the first clicked item
        item5.style.backgroundColor = 'green';
        item5.style.color = 'white';
      
        // Message if the user clicks the same card again
        item5.addEventListener('click', (e)=>{
            alert("Click another card 🤌");
        })
      
        // if item1 is clicked after item5 is clicked...
        item1.addEventListener('click', (e)=>{
      
          // giving the background a greenish background
          body.style.backgroundColor = "#a3f9a3";
    
          // change the content of the info box and edit the colors
          info.innerHTML = "&#x1F6C8; Correct match 👍";
          info.style.color = "green";
    
          // giving styles if this item is clicked after item5, this is the correct option
          item1.style.backgroundColor = 'green';
          item1.style.color = 'white';
          console.log('Match successful');
    
          // disabling cursor events to prevent clicking after a match-up
          item1.classList.add('disable');
          item2.classList.add('disable');
          item3.classList.add('disable');
          item4.classList.add('disable');
          item5.classList.add('disable');
          item6.classList.add('disable');
    
    
          // shows congrats page 
          next.innerHTML = 'Proceed';
          next.classList.remove('disappear');
          next.addEventListener('click', (e)=>{
            level.classList.add('hide');
            info.classList.add('hide');
            cover.classList.add('hide');
            congrats.classList.remove('hide');
          });
      
        });
      
        // if item2 is clicked after item5 is clicked...
        item2.addEventListener('click', (e)=>{
      
          // giving the background a reddish background
          body.style.backgroundColor = "#ffb1b1";
    
          // change the content of the info box and edit the colors
          info.innerHTML = "&#x1F6C8; Wrong match 🤪";
          info.style.color = "red";
          
          // giving styles if this item is clicked after item5, this is the wrong option
          item5.style.backgroundColor = 'red';
          item5.style.color = 'white';
          item2.style.backgroundColor = 'red';
          item2.style.color = 'white';
          console.log('Wrong match');
    
          // disabling cursor events to prevent clicking after a match-up
          item1.classList.add('disable');
          item2.classList.add('disable');
          item3.classList.add('disable');
          item4.classList.add('disable');
          item5.classList.add('disable');
          item6.classList.add('disable');
    
          // the page is reloaded if this button is clicked, serves as a try again button at this point
          feed.classList.remove('disappear');
          feed.innerHTML = 'To Lvl 1';
          feed.style.backgroundColor = "#c30101";
          feed.addEventListener('click', ()=>{
              window.location.reload();
          });
      
        });
    
        // if item3 is clicked after item5 is clicked...
        item3.addEventListener('click', (e)=>{
      
          // giving the background a reddish background
          body.style.backgroundColor = "#ffb1b1";
    
          // change the content of the info box and edit the colors
          info.innerHTML = "&#x1F6C8; Wrong match 🤪";
          info.style.color = "red";
          
          // giving styles if this item is clicked after item5, this is the wrong option
          item5.style.backgroundColor = 'red';
          item5.style.color = 'white';
          item3.style.backgroundColor = 'red';
          item3.style.color = 'white';
          console.log('Wrong match');
    
          // disabling cursor events to prevent clicking after a match-up
          item1.classList.add('disable');
          item2.classList.add('disable');
          item3.classList.add('disable');
          item4.classList.add('disable');
          item5.classList.add('disable');
          item6.classList.add('disable');
    
          // the page is reloaded if this button is clicked, serves as a try again button at this point
          feed.classList.remove('disappear');
          feed.innerHTML = 'To Lvl 1';
          feed.style.backgroundColor = "#c30101";
          feed.addEventListener('click', ()=>{
              window.location.reload();
          });
      
        });
    
        // if item4 is clicked after item5 is clicked...
        item4.addEventListener('click', (e)=>{
      
          // giving the background a reddish background
          body.style.backgroundColor = "#ffb1b1";
    
          // change the content of the info box and edit the colors
          info.innerHTML = "&#x1F6C8; Wrong match 🤪";
          info.style.color = "red";
          
          // giving styles if this item is clicked after item5, this is the wrong option
          item5.style.backgroundColor = 'red';
          item5.style.color = 'white';
          item4.style.backgroundColor = 'red';
          item4.style.color = 'white';
          console.log('Wrong match');
    
          // disabling cursor events to prevent clicking after a match-up
          item1.classList.add('disable');
          item2.classList.add('disable');
          item3.classList.add('disable');
          item4.classList.add('disable');
          item5.classList.add('disable');
          item6.classList.add('disable');
    
          // the page is reloaded if this button is clicked, serves as a try again button at this point
          feed.classList.remove('disappear');
          feed.innerHTML = 'To Lvl 1';
          feed.style.backgroundColor = "#c30101";
          feed.addEventListener('click', ()=>{
              window.location.reload();
          });
      
        });
    
        // if item6 is clicked after item5 is clicked...
        item6.addEventListener('click', (e)=>{
      
          // giving the background a reddish background
          body.style.backgroundColor = "#ffb1b1";
    
          // change the content of the info box and edit the colors
          info.innerHTML = "&#x1F6C8; Wrong match 🤪";
          info.style.color = "red";
          
          // giving styles if this item is clicked after item5, this is the wrong option
          item5.style.backgroundColor = 'red';
          item5.style.color = 'white';
          item6.style.backgroundColor = 'red';
          item6.style.color = 'white';
          console.log('Wrong match');
    
          // disabling cursor events to prevent clicking after a match-up
          item1.classList.add('disable');
          item2.classList.add('disable');
          item3.classList.add('disable');
          item4.classList.add('disable');
          item5.classList.add('disable');
          item6.classList.add('disable');
    
          // the page is reloaded if this button is clicked, serves as a try again button at this point
          feed.classList.remove('disappear');
          feed.innerHTML = 'To Lvl 1';
          feed.style.backgroundColor = "#c30101";
          feed.addEventListener('click', ()=>{
              window.location.reload();
          });
      
        });
      
      });
    
    
      item6.addEventListener('click', (e)=>{

        item6.classList.add('rotate');
      
        // change the content of the info box
        info.innerHTML = "&#x1F6C8; Choose a match 😦";
      
        // giving color stylings if item6 was the first clicked item
        item6.style.backgroundColor = 'green';
        item6.style.color = 'white';
      
        // Message if the user clicks the same card again
        item6.addEventListener('click', (e)=>{
          alert("Click another card 🤌");
        })
      
        // if item2 is clicked after item6 is clicked...
        item2.addEventListener('click', (e)=>{
      
          // giving the background a greenish background
          body.style.backgroundColor = "#a3f9a3";
    
          // change the content of the info box and edit the colors
          info.innerHTML = "&#x1F6C8; Correct match 👍";
          info.style.color = "green";
    
          // giving styles if this item is clicked after item6, this is the correct option
          item2.style.backgroundColor = 'green';
          item2.style.color = 'white';
          console.log('Match successful');
    
          // disabling cursor events to prevent clicking after a match-up
          item1.classList.add('disable');
          item2.classList.add('disable');
          item3.classList.add('disable');
          item4.classList.add('disable');
          item5.classList.add('disable');
          item6.classList.add('disable');
    
    
          // shows congrats page 
          next.innerHTML = 'Proceed';
          next.classList.remove('disappear');
          next.addEventListener('click', (e)=>{
            level.classList.add('hide');
            info.classList.add('hide');
            cover.classList.add('hide');
            congrats.classList.remove('hide');
          });
      
        });
      
        // if item1 is clicked after item6 is clicked...
        item1.addEventListener('click', (e)=>{
      
          // giving the background a reddish background
          body.style.backgroundColor = "#ffb1b1";
    
          // change the content of the info box and edit the colors
          info.innerHTML = "&#x1F6C8; Wrong match 🤪";
          info.style.color = "red";
          
          // giving styles if this item is clicked after item1, this is the wrong option
          item6.style.backgroundColor = 'red';
          item6.style.color = 'white';
          item1.style.backgroundColor = 'red';
          item1.style.color = 'white';
          console.log('Wrong match');
    
          // disabling cursor events to prevent clicking after a match-up
          item1.classList.add('disable');
          item2.classList.add('disable');
          item3.classList.add('disable');
          item4.classList.add('disable');
          item5.classList.add('disable');
          item6.classList.add('disable');
    
          // the page is reloaded if this button is clicked, serves as a try again button at this point
          feed.classList.remove('disappear');
          feed.innerHTML = 'To Lvl 1';
          feed.style.backgroundColor = "#c30101";
          feed.addEventListener('click', ()=>{
              window.location.reload();
          });
      
        });
    
        // if item3 is clicked after item6 is clicked...
        item3.addEventListener('click', (e)=>{
      
          // giving the background a reddish background
          body.style.backgroundColor = "#ffb1b1";
    
          // change the content of the info box and edit the colors
          info.innerHTML = "&#x1F6C8; Wrong match 🤪";
          info.style.color = "red";
          
          // giving styles if this item is clicked after item6, this is the wrong option
          item6.style.backgroundColor = 'red';
          item6.style.color = 'white';
          item3.style.backgroundColor = 'red';
          item3.style.color = 'white';
          console.log('Wrong match');
    
          // disabling cursor events to prevent clicking after a match-up
          item1.classList.add('disable');
          item2.classList.add('disable');
          item3.classList.add('disable');
          item4.classList.add('disable');
          item5.classList.add('disable');
          item6.classList.add('disable');
    
          // the page is reloaded if this button is clicked, serves as a try again button at this point
          feed.classList.remove('disappear');
          feed.innerHTML = 'To Lvl 1';
          feed.style.backgroundColor = "#c30101";
          feed.addEventListener('click', ()=>{
              window.location.reload();
          });
      
        });
    
        // if item4 is clicked after item6 is clicked...
        item4.addEventListener('click', (e)=>{
      
          // giving the background a reddish background
          body.style.backgroundColor = "#ffb1b1";
    
          // change the content of the info box and edit the colors
          info.innerHTML = "&#x1F6C8; Wrong match 🤪";
          info.style.color = "red";
          
          // giving styles if this item is clicked after item6, this is the wrong option
          item6.style.backgroundColor = 'red';
          item6.style.color = 'white';
          item4.style.backgroundColor = 'red';
          item4.style.color = 'white';
          console.log('Wrong match');
    
          // disabling cursor events to prevent clicking after a match-up
          item1.classList.add('disable');
          item2.classList.add('disable');
          item3.classList.add('disable');
          item4.classList.add('disable');
          item5.classList.add('disable');
          item6.classList.add('disable');
    
          // the page is reloaded if this button is clicked, serves as a try again button at this point
          feed.classList.remove('disappear');
          feed.innerHTML = 'To Lvl 1';
          feed.style.backgroundColor = "#c30101";
          feed.addEventListener('click', ()=>{
              window.location.reload();
          });
      
        });
    
        // if item5 is clicked after item6 is clicked...
        item5.addEventListener('click', (e)=>{
      
          // giving the background a reddish background
          body.style.backgroundColor = "#ffb1b1";
    
          // change the content of the info box and edit the colors
          info.innerHTML = "&#x1F6C8; Wrong match 🤪";
          info.style.color = "red";
          
          // giving styles if this item is clicked after item6, this is the wrong option
          item6.style.backgroundColor = 'red';
          item6.style.color = 'white';
          item5.style.backgroundColor = 'red';
          item5.style.color = 'white';
          console.log('Wrong match');
    
          // disabling cursor events to prevent clicking after a match-up
          item1.classList.add('disable');
          item2.classList.add('disable');
          item3.classList.add('disable');
          item4.classList.add('disable');
          item5.classList.add('disable');
          item6.classList.add('disable');
    
          // the page is reloaded if this button is clicked, serves as a try again button at this point
          feed.classList.remove('disappear');
          feed.innerHTML = 'To Lvl 1';
          feed.style.backgroundColor = "#c30101";
          feed.addEventListener('click', ()=>{
              window.location.reload();
          });
      
        });
      
      });

    });

    // ======================================================================================================

  });

  // if item2 is clicked after item1 is clicked...
  item2.addEventListener('click', (e)=>{

      // giving the background a reddish background
      body.style.backgroundColor = "#ffb1b1";

      // change the content of the info box and edit the colors
      info.innerHTML = "&#x1F6C8; Wrong match 🤪";
      info.style.color = "red";
      
      // giving styles if this item is clicked after item1, this is the wrong option
      item1.style.backgroundColor = 'red';
      item1.style.color = 'white';
      item2.style.backgroundColor = 'red';
      item2.style.color = 'white';
      console.log('Wrong match');

      // disabling cursor events to prevent clicking after a match-up
      item1.classList.add('disable');
      item2.classList.add('disable');
      item3.classList.add('disable');

      // the page is reloaded if this button is clicked, serves as a try again button at this point
      feed.innerHTML = 'Try Again';
      feed.style.backgroundColor = "#c30101";
      feed.addEventListener('click', ()=>{
          window.location.reload();
      });

  });

});



item2.addEventListener('click', (e)=>{

  item2.classList.add('rotate');

  // change the content of the info box
  info.innerHTML = "&#x1F6C8; Choose a match 😦";

  // giving color stylings if item2 was the first clicked item
  item2.style.backgroundColor = 'green';
  item2.style.color = 'white';
  // removing the disappear classlist to make the button visible
  feed.classList.remove('disappear');

  // the page is reloaded if this button is clicked, it serves as a start over button at this point
  feed.addEventListener('click', ()=>{
      window.location.reload();
  });

  // Message if the user clicks the same card again
  item2.addEventListener('click', (e)=>{
      alert("Click another card 🤌");
  })

  // if item3 is clicked after item2 is clicked...
  item3.addEventListener('click', (e)=>{

    // giving the background a greenish background
    body.style.backgroundColor = "#a3f9a3";

    // change the content of the info box and edit the colors
    info.innerHTML = "&#x1F6C8; Correct match 👍";
    info.style.color = "green";

    // giving styles if this item is clicked after item2, this is the correct option
    item3.style.backgroundColor = 'green';
    item3.style.color = 'white';
    console.log('Match successful');

    // disabling cursor events to prevent clicking after a match-up
    item1.classList.add('disable');
    item2.classList.add('disable');
    item3.classList.add('disable');

    // the page is reloaded if this button is clicked, serves as a try again button at this point
    feed.innerHTML = 'Restart';
    feed.style.backgroundColor = "#005400";
    feed.addEventListener('click', ()=>{
        window.location.reload();
    });

    // make button visible
    next.classList.remove('disappear');
    //=================================== takes player to next level ========================================

    next.addEventListener('click', (e)=>{

      // reset body color
      body.style.backgroundColor = "#dbdbff";

      // changes the numbers on the level count
      level.innerHTML = "(LVL 02 OF 02)";

      // reset info styles and text
      info.innerHTML = "&#x1F6C8; Choose a card 🤞";
      info.style.color = "";

      // remove buttons
      feed.classList.add('disappear');
      next.classList.add('disappear'); 
    
      // creating html elements and assigning classes and values to them

      let item1 = document.createElement('div');
      item1.classList.add('item1');
      item1.innerHTML = "One";
    
      let item2 = document.createElement('div');
      item2.classList.add('item2');
      item2.innerHTML = "Two";
    
      let item3 = document.createElement('div');
      item3.classList.add('item3');
      item3.innerHTML = "Three";
    
      
      let item4 = document.createElement('div');
      item4.classList.add('item4');
      item4.innerHTML = "Four";
      
      let item5 = document.createElement('div');
      item5.classList.add('item5');
      item5.innerHTML = "Five";
      
      let item6 = document.createElement('div');
      item6.classList.add('item6');
      item6.innerHTML = "Six";
      
      
      // putting created elements in parent element
      cover.innerHTML = "";
      cover.appendChild(item1);
      cover.appendChild(item2);
      cover.appendChild(item3);
      cover.appendChild(item4);
      cover.appendChild(item5);
      cover.appendChild(item6);
    
    
    
    
      
      item1.addEventListener('click', (e)=>{
        
        item1.classList.add('rotate');

        // change the content of the info box
        info.innerHTML = "&#x1F6C8; Choose a match 😦";
      
        // giving color stylings if item1 was the first clicked item
        item1.style.backgroundColor = 'green';
        item1.style.color = 'white';
      
        // Message if the user clicks the same card again
        item1.addEventListener('click', (e)=>{
            alert("Click another card 🤌");
        })
      
        // if item5 is clicked after item1 is clicked...
        item5.addEventListener('click', (e)=>{
      
          // giving the background a greenish background
          body.style.backgroundColor = "#a3f9a3";
    
          // change the content of the info box and edit the colors
          info.innerHTML = "&#x1F6C8; Correct match 👍";
          info.style.color = "green";
    
          // giving styles if this item is clicked after item1, this is the correct option
          item5.style.backgroundColor = 'green';
          item5.style.color = 'white';
          console.log('Match successful');
    
          // disabling cursor events to prevent clicking after a match-up
          item1.classList.add('disable');
          item2.classList.add('disable');
          item3.classList.add('disable');
          item4.classList.add('disable');
          item5.classList.add('disable');
          item6.classList.add('disable');
    
    
          // shows congrats page 
          next.innerHTML = 'Proceed';
          next.classList.remove('disappear');
          next.addEventListener('click', (e)=>{
            level.classList.add('hide');
            info.classList.add('hide');
            cover.classList.add('hide');
            congrats.classList.remove('hide');
          });
      
        });
      
        // if item2 is clicked after item1 is clicked...
        item2.addEventListener('click', (e)=>{
      
          // giving the background a reddish background
          body.style.backgroundColor = "#ffb1b1";
    
          // change the content of the info box and edit the colors
          info.innerHTML = "&#x1F6C8; Wrong match 🤪";
          info.style.color = "red";
          
          // giving styles if this item is clicked after item1, this is the wrong option
          item1.style.backgroundColor = 'red';
          item1.style.color = 'white';
          item2.style.backgroundColor = 'red';
          item2.style.color = 'white';
          console.log('Wrong match');
    
          // disabling cursor events to prevent clicking after a match-up
          item1.classList.add('disable');
          item2.classList.add('disable');
          item3.classList.add('disable');
          item4.classList.add('disable');
          item5.classList.add('disable');
          item6.classList.add('disable');
    
          // the page is reloaded if this button is clicked, serves as a try again button at this point
          feed.classList.remove('disappear');
          feed.innerHTML = 'To Lvl 1';
          feed.style.backgroundColor = "#c30101";
          feed.addEventListener('click', ()=>{
              window.location.reload();
          });
      
        });
    
        // if item3 is clicked after item1 is clicked...
        item3.addEventListener('click', (e)=>{
      
          // giving the background a reddish background
          body.style.backgroundColor = "#ffb1b1";
    
          // change the content of the info box and edit the colors
          info.innerHTML = "&#x1F6C8; Wrong match 🤪";
          info.style.color = "red";
          
          // giving styles if this item is clicked after item1, this is the wrong option
          item1.style.backgroundColor = 'red';
          item1.style.color = 'white';
          item3.style.backgroundColor = 'red';
          item3.style.color = 'white';
          console.log('Wrong match');
    
          // disabling cursor events to prevent clicking after a match-up
          item1.classList.add('disable');
          item2.classList.add('disable');
          item3.classList.add('disable');
          item4.classList.add('disable');
          item5.classList.add('disable');
          item6.classList.add('disable');
    
          // the page is reloaded if this button is clicked, serves as a try again button at this point
          feed.classList.remove('disappear');
          feed.innerHTML = 'To Lvl 1';
          feed.style.backgroundColor = "#c30101";
          feed.addEventListener('click', ()=>{
              window.location.reload();
          });
      
        });
    
        // if item4 is clicked after item1 is clicked...
        item4.addEventListener('click', (e)=>{
      
          // giving the background a reddish background
          body.style.backgroundColor = "#ffb1b1";
    
          // change the content of the info box and edit the colors
          info.innerHTML = "&#x1F6C8; Wrong match 🤪";
          info.style.color = "red";
          
          // giving styles if this item is clicked after item1, this is the wrong option
          item1.style.backgroundColor = 'red';
          item1.style.color = 'white';
          item4.style.backgroundColor = 'red';
          item4.style.color = 'white';
          console.log('Wrong match');
    
          // disabling cursor events to prevent clicking after a match-up
          item1.classList.add('disable');
          item2.classList.add('disable');
          item3.classList.add('disable');
          item4.classList.add('disable');
          item5.classList.add('disable');
          item6.classList.add('disable');
    
          // the page is reloaded if this button is clicked, serves as a try again button at this point
          feed.classList.remove('disappear');
          feed.innerHTML = 'To Lvl 1';
          feed.style.backgroundColor = "#c30101";
          feed.addEventListener('click', ()=>{
              window.location.reload();
          });
      
        });
    
        // if item6 is clicked after item1 is clicked...
        item6.addEventListener('click', (e)=>{
      
          // giving the background a reddish background
          body.style.backgroundColor = "#ffb1b1";
    
          // change the content of the info box and edit the colors
          info.innerHTML = "&#x1F6C8; Wrong match 🤪";
          info.style.color = "red";
          
          // giving styles if this item is clicked after item1, this is the wrong option
          item1.style.backgroundColor = 'red';
          item1.style.color = 'white';
          item6.style.backgroundColor = 'red';
          item6.style.color = 'white';
          console.log('Wrong match');
    
          // disabling cursor events to prevent clicking after a match-up
          item1.classList.add('disable');
          item2.classList.add('disable');
          item3.classList.add('disable');
          item4.classList.add('disable');
          item5.classList.add('disable');
          item6.classList.add('disable');
    
          // the page is reloaded if this button is clicked, serves as a try again button at this point
          feed.classList.remove('disappear');
          feed.innerHTML = 'To Lvl 1';
          feed.style.backgroundColor = "#c30101";
          feed.addEventListener('click', ()=>{
              window.location.reload();
          });
      
        });
      
      });
      
      
      item2.addEventListener('click', (e)=>{
        
        item2.classList.add('rotate');

        // change the content of the info box
        info.innerHTML = "&#x1F6C8; Choose a match 😦";
      
        // giving color stylings if item2 was the first clicked item
        item2.style.backgroundColor = 'green';
        item2.style.color = 'white';
      
        // Message if the user clicks the same card again
        item2.addEventListener('click', (e)=>{
            alert("Click another card 🤌");
        })
      
        // if item4 is clicked after item2 is clicked...
        item4.addEventListener('click', (e)=>{
      
          // giving the background a greenish background
          body.style.backgroundColor = "#a3f9a3";
    
          // change the content of the info box and edit the colors
          info.innerHTML = "&#x1F6C8; Correct match 👍";
          info.style.color = "green";
    
          // giving styles if this item is clicked after item2, this is the correct option
          item4.style.backgroundColor = 'green';
          item4.style.color = 'white';
          console.log('Match successful');
    
          // disabling cursor events to prevent clicking after a match-up
          item1.classList.add('disable');
          item2.classList.add('disable');
          item3.classList.add('disable');
          item4.classList.add('disable');
          item5.classList.add('disable');
          item6.classList.add('disable');
    
    
          // shows congrats page 
          next.innerHTML = 'Proceed';
          next.classList.remove('disappear');
          next.addEventListener('click', (e)=>{
            level.classList.add('hide');
            info.classList.add('hide');
            cover.classList.add('hide');
            congrats.classList.remove('hide');
          });
      
        });
      
        // if item1 is clicked after item2 is clicked...
        item1.addEventListener('click', (e)=>{
      
          // giving the background a reddish background
          body.style.backgroundColor = "#ffb1b1";
    
          // change the content of the info box and edit the colors
          info.innerHTML = "&#x1F6C8; Wrong match 🤪";
          info.style.color = "red";
          
          // giving styles if this item is clicked after item1, this is the wrong option
          item2.style.backgroundColor = 'red';
          item2.style.color = 'white';
          item1.style.backgroundColor = 'red';
          item1.style.color = 'white';
          console.log('Wrong match');
    
          // disabling cursor events to prevent clicking after a match-up
          item1.classList.add('disable');
          item2.classList.add('disable');
          item3.classList.add('disable');
          item4.classList.add('disable');
          item5.classList.add('disable');
          item6.classList.add('disable');
    
          // the page is reloaded if this button is clicked, serves as a try again button at this point
          feed.classList.remove('disappear');
          feed.innerHTML = 'To Lvl 1';
          feed.style.backgroundColor = "#c30101";
          feed.addEventListener('click', ()=>{
              window.location.reload();
          });
      
        });
    
        // if item3 is clicked after item2 is clicked...
        item3.addEventListener('click', (e)=>{
      
          // giving the background a reddish background
          body.style.backgroundColor = "#ffb1b1";
    
          // change the content of the info box and edit the colors
          info.innerHTML = "&#x1F6C8; Wrong match 🤪";
          info.style.color = "red";
          
          // giving styles if this item is clicked after item2, this is the wrong option
          item2.style.backgroundColor = 'red';
          item2.style.color = 'white';
          item3.style.backgroundColor = 'red';
          item3.style.color = 'white';
          console.log('Wrong match');
    
          // disabling cursor events to prevent clicking after a match-up
          item1.classList.add('disable');
          item2.classList.add('disable');
          item3.classList.add('disable');
          item4.classList.add('disable');
          item5.classList.add('disable');
          item6.classList.add('disable');
    
          // the page is reloaded if this button is clicked, serves as a try again button at this point
          feed.classList.remove('disappear');
          feed.innerHTML = 'To Lvl 1';
          feed.style.backgroundColor = "#c30101";
          feed.addEventListener('click', ()=>{
              window.location.reload();
          });
      
        });
    
        // if item5 is clicked after item2 is clicked...
        item5.addEventListener('click', (e)=>{
      
          // giving the background a reddish background
          body.style.backgroundColor = "#ffb1b1";
    
          // change the content of the info box and edit the colors
          info.innerHTML = "&#x1F6C8; Wrong match 🤪";
          info.style.color = "red";
          
          // giving styles if this item is clicked after item2, this is the wrong option
          item2.style.backgroundColor = 'red';
          item2.style.color = 'white';
          item5.style.backgroundColor = 'red';
          item5.style.color = 'white';
          console.log('Wrong match');
    
          // disabling cursor events to prevent clicking after a match-up
          item1.classList.add('disable');
          item2.classList.add('disable');
          item3.classList.add('disable');
          item4.classList.add('disable');
          item5.classList.add('disable');
          item6.classList.add('disable');
    
          // the page is reloaded if this button is clicked, serves as a try again button at this point
          feed.classList.remove('disappear');
          feed.innerHTML = 'To Lvl 1';
          feed.style.backgroundColor = "#c30101";
          feed.addEventListener('click', ()=>{
              window.location.reload();
          });
      
        });
    
        // if item6 is clicked after item2 is clicked...
        item6.addEventListener('click', (e)=>{
      
          // giving the background a reddish background
          body.style.backgroundColor = "#ffb1b1";
    
          // change the content of the info box and edit the colors
          info.innerHTML = "&#x1F6C8; Wrong match 🤪";
          info.style.color = "red";
          
          // giving styles if this item is clicked after item2, this is the wrong option
          item2.style.backgroundColor = 'red';
          item2.style.color = 'white';
          item6.style.backgroundColor = 'red';
          item6.style.color = 'white';
          console.log('Wrong match');
    
          // disabling cursor events to prevent clicking after a match-up
          item1.classList.add('disable');
          item2.classList.add('disable');
          item3.classList.add('disable');
          item4.classList.add('disable');
          item5.classList.add('disable');
          item6.classList.add('disable');
    
          // the page is reloaded if this button is clicked, serves as a try again button at this point
          feed.classList.remove('disappear');
          feed.innerHTML = 'To Lvl 1';
          feed.style.backgroundColor = "#c30101";
          feed.addEventListener('click', ()=>{
              window.location.reload();
          });
      
        });
      
      });
      
      
      item3.addEventListener('click', (e)=>{
        
        item3.classList.add('rotate');

        // change the content of the info box
        info.innerHTML = "&#x1F6C8; Choose a match 😦";
      
        // giving color stylings if item3 was the first clicked item
        item3.style.backgroundColor = 'green';
        item3.style.color = 'white';
      
        // Message if the user clicks the same card again
        item3.addEventListener('click', (e)=>{
            alert("Click another card 🤌");
        })
      
        // if item5 is clicked after item3 is clicked...
        item5.addEventListener('click', (e)=>{
      
          // giving the background a greenish background
          body.style.backgroundColor = "#a3f9a3";
    
          // change the content of the info box and edit the colors
          info.innerHTML = "&#x1F6C8; Correct match 👍";
          info.style.color = "green";
    
          // giving styles if this item is clicked after item3, this is the correct option
          item5.style.backgroundColor = 'green';
          item5.style.color = 'white';
          console.log('Match successful');
    
          // disabling cursor events to prevent clicking after a match-up
          item1.classList.add('disable');
          item2.classList.add('disable');
          item3.classList.add('disable');
          item4.classList.add('disable');
          item5.classList.add('disable');
          item6.classList.add('disable');
    
    
          // shows congrats page 
          next.innerHTML = 'Proceed';
          next.classList.remove('disappear');
          next.addEventListener('click', (e)=>{
            level.classList.add('hide');
            info.classList.add('hide');
            cover.classList.add('hide');
            congrats.classList.remove('hide');
          });
      
        });
      
        // if item2 is clicked after item3 is clicked...
        item2.addEventListener('click', (e)=>{
      
          // giving the background a reddish background
          body.style.backgroundColor = "#ffb1b1";
    
          // change the content of the info box and edit the colors
          info.innerHTML = "&#x1F6C8; Wrong match 🤪";
          info.style.color = "red";
          
          // giving styles if this item is clicked after item3, this is the wrong option
          item3.style.backgroundColor = 'red';
          item3.style.color = 'white';
          item2.style.backgroundColor = 'red';
          item2.style.color = 'white';
          console.log('Wrong match');
    
          // disabling cursor events to prevent clicking after a match-up
          item1.classList.add('disable');
          item2.classList.add('disable');
          item3.classList.add('disable');
          item4.classList.add('disable');
          item5.classList.add('disable');
          item6.classList.add('disable');
    
          // the page is reloaded if this button is clicked, serves as a try again button at this point
          feed.classList.remove('disappear');
          feed.innerHTML = 'To Lvl 1';
          feed.style.backgroundColor = "#c30101";
          feed.addEventListener('click', ()=>{
              window.location.reload();
          });
      
        });
    
        // if item1 is clicked after item3 is clicked...
        item1.addEventListener('click', (e)=>{
      
          // giving the background a reddish background
          body.style.backgroundColor = "#ffb1b1";
    
          // change the content of the info box and edit the colors
          info.innerHTML = "&#x1F6C8; Wrong match 🤪";
          info.style.color = "red";
          
          // giving styles if this item is clicked after item1, this is the wrong option
          item3.style.backgroundColor = 'red';
          item3.style.color = 'white';
          item1.style.backgroundColor = 'red';
          item1.style.color = 'white';
          console.log('Wrong match');
    
          // disabling cursor events to prevent clicking after a match-up
          item1.classList.add('disable');
          item2.classList.add('disable');
          item3.classList.add('disable');
          item4.classList.add('disable');
          item5.classList.add('disable');
          item6.classList.add('disable');
    
          // the page is reloaded if this button is clicked, serves as a try again button at this point
          feed.classList.remove('disappear');
          feed.innerHTML = 'To Lvl 1';
          feed.style.backgroundColor = "#c30101";
          feed.addEventListener('click', ()=>{
              window.location.reload();
          });
      
        });
    
        // if item4 is clicked after item3 is clicked...
        item4.addEventListener('click', (e)=>{
      
          // giving the background a reddish background
          body.style.backgroundColor = "#ffb1b1";
    
          // change the content of the info box and edit the colors
          info.innerHTML = "&#x1F6C8; Wrong match 🤪";
          info.style.color = "red";
          
          // giving styles if this item is clicked after item3, this is the wrong option
          item3.style.backgroundColor = 'red';
          item3.style.color = 'white';
          item4.style.backgroundColor = 'red';
          item4.style.color = 'white';
          console.log('Wrong match');
    
          // disabling cursor events to prevent clicking after a match-up
          item1.classList.add('disable');
          item2.classList.add('disable');
          item3.classList.add('disable');
          item4.classList.add('disable');
          item5.classList.add('disable');
          item6.classList.add('disable');
    
          // the page is reloaded if this button is clicked, serves as a try again button at this point
          feed.classList.remove('disappear');
          feed.innerHTML = 'To Lvl 1';
          feed.style.backgroundColor = "#c30101";
          feed.addEventListener('click', ()=>{
            window.location.reload();
          });
      
        });
    
        // if item6 is clicked after item3 is clicked...
        item6.addEventListener('click', (e)=>{
      
          // giving the background a reddish background
          body.style.backgroundColor = "#ffb1b1";
    
          // change the content of the info box and edit the colors
          info.innerHTML = "&#x1F6C8; Wrong match 🤪";
          info.style.color = "red";
          
          // giving styles if this item is clicked after item3, this is the wrong option
          item3.style.backgroundColor = 'red';
          item3.style.color = 'white';
          item6.style.backgroundColor = 'red';
          item6.style.color = 'white';
          console.log('Wrong match');
    
          // disabling cursor events to prevent clicking after a match-up
          item1.classList.add('disable');
          item2.classList.add('disable');
          item3.classList.add('disable');
          item4.classList.add('disable');
          item5.classList.add('disable');
          item6.classList.add('disable');
    
          // the page is reloaded if this button is clicked, serves as a try again button at this point
          feed.classList.remove('disappear');
          feed.innerHTML = 'To Lvl 1';
          feed.style.backgroundColor = "#c30101";
          feed.addEventListener('click', ()=>{
              window.location.reload();
          });
      
        });
      
      });
    
    
      item4.addEventListener('click', (e)=>{
        
        item4.classList.add('rotate');

        // change the content of the info box
        info.innerHTML = "&#x1F6C8; Choose a match 😦";
      
        // giving color stylings if item4 was the first clicked item
        item4.style.backgroundColor = 'green';
        item4.style.color = 'white';
      
        // Message if the user clicks the same card again
        item4.addEventListener('click', (e)=>{
            alert("Click another card 🤌");
        })
      
        // if item6 is clicked after item4 is clicked...
        item6.addEventListener('click', (e)=>{
      
          // giving the background a greenish background
          body.style.backgroundColor = "#a3f9a3";
    
          // change the content of the info box and edit the colors
          info.innerHTML = "&#x1F6C8; Correct match 👍";
          info.style.color = "green";
    
          // giving styles if this item is clicked after item4, this is the correct option
          item6.style.backgroundColor = 'green';
          item6.style.color = 'white';
          console.log('Match successful');
    
          // disabling cursor events to prevent clicking after a match-up
          item1.classList.add('disable');
          item2.classList.add('disable');
          item3.classList.add('disable');
          item4.classList.add('disable');
          item5.classList.add('disable');
          item6.classList.add('disable');
    
    
          // shows congrats page 
          next.innerHTML = 'Proceed';
          next.classList.remove('disappear');
          next.addEventListener('click', (e)=>{
            level.classList.add('hide');
            info.classList.add('hide');
            cover.classList.add('hide');
            congrats.classList.remove('hide');
          });
      
        });
      
        // if item2 is clicked after item4 is clicked...
        item2.addEventListener('click', (e)=>{
      
          // giving the background a reddish background
          body.style.backgroundColor = "#ffb1b1";
    
          // change the content of the info box and edit the colors
          info.innerHTML = "&#x1F6C8; Wrong match 🤪";
          info.style.color = "red";
          
          // giving styles if this item is clicked after item4, this is the wrong option
          item4.style.backgroundColor = 'red';
          item4.style.color = 'white';
          item2.style.backgroundColor = 'red';
          item2.style.color = 'white';
          console.log('Wrong match');
    
          // disabling cursor events to prevent clicking after a match-up
          item1.classList.add('disable');
          item2.classList.add('disable');
          item3.classList.add('disable');
          item4.classList.add('disable');
          item5.classList.add('disable');
          item6.classList.add('disable');
    
          // the page is reloaded if this button is clicked, serves as a try again button at this point
          feed.classList.remove('disappear');
          feed.innerHTML = 'To Lvl 1';
          feed.style.backgroundColor = "#c30101";
          feed.addEventListener('click', ()=>{
              window.location.reload();
          });
      
        });
    
        // if item3 is clicked after item4 is clicked...
        item3.addEventListener('click', (e)=>{
      
          // giving the background a reddish background
          body.style.backgroundColor = "#ffb1b1";
    
          // change the content of the info box and edit the colors
          info.innerHTML = "&#x1F6C8; Wrong match 🤪";
          info.style.color = "red";
          
          // giving styles if this item is clicked after item4, this is the wrong option
          item4.style.backgroundColor = 'red';
          item4.style.color = 'white';
          item3.style.backgroundColor = 'red';
          item3.style.color = 'white';
          console.log('Wrong match');
    
          // disabling cursor events to prevent clicking after a match-up
          item1.classList.add('disable');
          item2.classList.add('disable');
          item3.classList.add('disable');
          item4.classList.add('disable');
          item5.classList.add('disable');
          item6.classList.add('disable');
    
          // the page is reloaded if this button is clicked, serves as a try again button at this point
          feed.classList.remove('disappear');
          feed.innerHTML = 'To Lvl 1';
          feed.style.backgroundColor = "#c30101";
          feed.addEventListener('click', ()=>{
              window.location.reload();
          });
      
        });
    
        // if item4 is clicked after item4 is clicked...
        item1.addEventListener('click', (e)=>{
      
          // giving the background a reddish background
          body.style.backgroundColor = "#ffb1b1";
    
          // change the content of the info box and edit the colors
          info.innerHTML = "&#x1F6C8; Wrong match 🤪";
          info.style.color = "red";
          
          // giving styles if this item is clicked after item1, this is the wrong option
          item4.style.backgroundColor = 'red';
          item4.style.color = 'white';
          item1.style.backgroundColor = 'red';
          item1.style.color = 'white';
          console.log('Wrong match');
    
          // disabling cursor events to prevent clicking after a match-up
          item1.classList.add('disable');
          item2.classList.add('disable');
          item3.classList.add('disable');
          item4.classList.add('disable');
          item5.classList.add('disable');
          item6.classList.add('disable');
    
          // the page is reloaded if this button is clicked, serves as a try again button at this point
          feed.classList.remove('disappear');
          feed.innerHTML = 'To Lvl 1';
          feed.style.backgroundColor = "#c30101";
          feed.addEventListener('click', ()=>{
              window.location.reload();
          });
      
        });
    
        // if item6 is clicked after item4 is clicked...
        item5.addEventListener('click', (e)=>{
      
          // giving the background a reddish background
          body.style.backgroundColor = "#ffb1b1";
    
          // change the content of the info box and edit the colors
          info.innerHTML = "&#x1F6C8; Wrong match 🤪";
          info.style.color = "red";
          
          // giving styles if this item is clicked after item4, this is the wrong option
          item4.style.backgroundColor = 'red';
          item4.style.color = 'white';
          item5.style.backgroundColor = 'red';
          item5.style.color = 'white';
          console.log('Wrong match');
    
          // disabling cursor events to prevent clicking after a match-up
          item1.classList.add('disable');
          item2.classList.add('disable');
          item3.classList.add('disable');
          item4.classList.add('disable');
          item5.classList.add('disable');
          item6.classList.add('disable');
    
          // the page is reloaded if this button is clicked, serves as a try again button at this point
          feed.classList.remove('disappear');
          feed.innerHTML = 'To Lvl 1';
          feed.style.backgroundColor = "#c30101";
          feed.addEventListener('click', ()=>{
              window.location.reload();
          });
      
        });
      
      });
    
    
      item5.addEventListener('click', (e)=>{
        
        item5.classList.add('rotate');

        // change the content of the info box
        info.innerHTML = "&#x1F6C8; Choose a match 😦";
      
        // giving color stylings if item5 was the first clicked item
        item5.style.backgroundColor = 'green';
        item5.style.color = 'white';
      
        // Message if the user clicks the same card again
        item5.addEventListener('click', (e)=>{
            alert("Click another card 🤌");
        })
      
        // if item1 is clicked after item5 is clicked...
        item1.addEventListener('click', (e)=>{
      
          // giving the background a greenish background
          body.style.backgroundColor = "#a3f9a3";
    
          // change the content of the info box and edit the colors
          info.innerHTML = "&#x1F6C8; Correct match 👍";
          info.style.color = "green";
    
          // giving styles if this item is clicked after item5, this is the correct option
          item1.style.backgroundColor = 'green';
          item1.style.color = 'white';
          console.log('Match successful');
    
          // disabling cursor events to prevent clicking after a match-up
          item1.classList.add('disable');
          item2.classList.add('disable');
          item3.classList.add('disable');
          item4.classList.add('disable');
          item5.classList.add('disable');
          item6.classList.add('disable');
    
    
          // shows congrats page 
          next.innerHTML = 'Proceed';
          next.classList.remove('disappear');
          next.addEventListener('click', (e)=>{
            level.classList.add('hide');
            info.classList.add('hide');
            cover.classList.add('hide');
            congrats.classList.remove('hide');
          });
      
        });
      
        // if item2 is clicked after item5 is clicked...
        item2.addEventListener('click', (e)=>{
      
          // giving the background a reddish background
          body.style.backgroundColor = "#ffb1b1";
    
          // change the content of the info box and edit the colors
          info.innerHTML = "&#x1F6C8; Wrong match 🤪";
          info.style.color = "red";
          
          // giving styles if this item is clicked after item5, this is the wrong option
          item5.style.backgroundColor = 'red';
          item5.style.color = 'white';
          item2.style.backgroundColor = 'red';
          item2.style.color = 'white';
          console.log('Wrong match');
    
          // disabling cursor events to prevent clicking after a match-up
          item1.classList.add('disable');
          item2.classList.add('disable');
          item3.classList.add('disable');
          item4.classList.add('disable');
          item5.classList.add('disable');
          item6.classList.add('disable');
    
          // the page is reloaded if this button is clicked, serves as a try again button at this point
          feed.classList.remove('disappear');
          feed.innerHTML = 'To Lvl 1';
          feed.style.backgroundColor = "#c30101";
          feed.addEventListener('click', ()=>{
              window.location.reload();
          });
      
        });
    
        // if item3 is clicked after item5 is clicked...
        item3.addEventListener('click', (e)=>{
      
          // giving the background a reddish background
          body.style.backgroundColor = "#ffb1b1";
    
          // change the content of the info box and edit the colors
          info.innerHTML = "&#x1F6C8; Wrong match 🤪";
          info.style.color = "red";
          
          // giving styles if this item is clicked after item5, this is the wrong option
          item5.style.backgroundColor = 'red';
          item5.style.color = 'white';
          item3.style.backgroundColor = 'red';
          item3.style.color = 'white';
          console.log('Wrong match');
    
          // disabling cursor events to prevent clicking after a match-up
          item1.classList.add('disable');
          item2.classList.add('disable');
          item3.classList.add('disable');
          item4.classList.add('disable');
          item5.classList.add('disable');
          item6.classList.add('disable');
    
          // the page is reloaded if this button is clicked, serves as a try again button at this point
          feed.classList.remove('disappear');
          feed.innerHTML = 'To Lvl 1';
          feed.style.backgroundColor = "#c30101";
          feed.addEventListener('click', ()=>{
              window.location.reload();
          });
      
        });
    
        // if item4 is clicked after item5 is clicked...
        item4.addEventListener('click', (e)=>{
      
          // giving the background a reddish background
          body.style.backgroundColor = "#ffb1b1";
    
          // change the content of the info box and edit the colors
          info.innerHTML = "&#x1F6C8; Wrong match 🤪";
          info.style.color = "red";
          
          // giving styles if this item is clicked after item5, this is the wrong option
          item5.style.backgroundColor = 'red';
          item5.style.color = 'white';
          item4.style.backgroundColor = 'red';
          item4.style.color = 'white';
          console.log('Wrong match');
    
          // disabling cursor events to prevent clicking after a match-up
          item1.classList.add('disable');
          item2.classList.add('disable');
          item3.classList.add('disable');
          item4.classList.add('disable');
          item5.classList.add('disable');
          item6.classList.add('disable');
    
          // the page is reloaded if this button is clicked, serves as a try again button at this point
          feed.classList.remove('disappear');
          feed.innerHTML = 'To Lvl 1';
          feed.style.backgroundColor = "#c30101";
          feed.addEventListener('click', ()=>{
              window.location.reload();
          });
      
        });
    
        // if item6 is clicked after item5 is clicked...
        item6.addEventListener('click', (e)=>{
      
          // giving the background a reddish background
          body.style.backgroundColor = "#ffb1b1";
    
          // change the content of the info box and edit the colors
          info.innerHTML = "&#x1F6C8; Wrong match 🤪";
          info.style.color = "red";
          
          // giving styles if this item is clicked after item5, this is the wrong option
          item5.style.backgroundColor = 'red';
          item5.style.color = 'white';
          item6.style.backgroundColor = 'red';
          item6.style.color = 'white';
          console.log('Wrong match');
    
          // disabling cursor events to prevent clicking after a match-up
          item1.classList.add('disable');
          item2.classList.add('disable');
          item3.classList.add('disable');
          item4.classList.add('disable');
          item5.classList.add('disable');
          item6.classList.add('disable');
    
          // the page is reloaded if this button is clicked, serves as a try again button at this point
          feed.classList.remove('disappear');
          feed.innerHTML = 'To Lvl 1';
          feed.style.backgroundColor = "#c30101";
          feed.addEventListener('click', ()=>{
              window.location.reload();
          });
      
        });
      
      });
    
    
      item6.addEventListener('click', (e)=>{
        
        item6.classList.add('rotate');

        // change the content of the info box
        info.innerHTML = "&#x1F6C8; Choose a match 😦";
      
        // giving color stylings if item6 was the first clicked item
        item6.style.backgroundColor = 'green';
        item6.style.color = 'white';
      
        // Message if the user clicks the same card again
        item6.addEventListener('click', (e)=>{
          alert("Click another card 🤌");
        })
      
        // if item2 is clicked after item6 is clicked...
        item2.addEventListener('click', (e)=>{
      
          // giving the background a greenish background
          body.style.backgroundColor = "#a3f9a3";
    
          // change the content of the info box and edit the colors
          info.innerHTML = "&#x1F6C8; Correct match 👍";
          info.style.color = "green";
    
          // giving styles if this item is clicked after item6, this is the correct option
          item2.style.backgroundColor = 'green';
          item2.style.color = 'white';
          console.log('Match successful');
    
          // disabling cursor events to prevent clicking after a match-up
          item1.classList.add('disable');
          item2.classList.add('disable');
          item3.classList.add('disable');
          item4.classList.add('disable');
          item5.classList.add('disable');
          item6.classList.add('disable');
    
    
          // shows congrats page 
          next.innerHTML = 'Proceed';
          next.classList.remove('disappear');
          next.addEventListener('click', (e)=>{
            level.classList.add('hide');
            info.classList.add('hide');
            cover.classList.add('hide');
            congrats.classList.remove('hide');
          });
      
        });
      
        // if item1 is clicked after item6 is clicked...
        item1.addEventListener('click', (e)=>{
      
          // giving the background a reddish background
          body.style.backgroundColor = "#ffb1b1";
    
          // change the content of the info box and edit the colors
          info.innerHTML = "&#x1F6C8; Wrong match 🤪";
          info.style.color = "red";
          
          // giving styles if this item is clicked after item1, this is the wrong option
          item6.style.backgroundColor = 'red';
          item6.style.color = 'white';
          item1.style.backgroundColor = 'red';
          item1.style.color = 'white';
          console.log('Wrong match');
    
          // disabling cursor events to prevent clicking after a match-up
          item1.classList.add('disable');
          item2.classList.add('disable');
          item3.classList.add('disable');
          item4.classList.add('disable');
          item5.classList.add('disable');
          item6.classList.add('disable');
    
          // the page is reloaded if this button is clicked, serves as a try again button at this point
          feed.classList.remove('disappear');
          feed.innerHTML = 'To Lvl 1';
          feed.style.backgroundColor = "#c30101";
          feed.addEventListener('click', ()=>{
              window.location.reload();
          });
      
        });
    
        // if item3 is clicked after item6 is clicked...
        item3.addEventListener('click', (e)=>{
      
          // giving the background a reddish background
          body.style.backgroundColor = "#ffb1b1";
    
          // change the content of the info box and edit the colors
          info.innerHTML = "&#x1F6C8; Wrong match 🤪";
          info.style.color = "red";
          
          // giving styles if this item is clicked after item6, this is the wrong option
          item6.style.backgroundColor = 'red';
          item6.style.color = 'white';
          item3.style.backgroundColor = 'red';
          item3.style.color = 'white';
          console.log('Wrong match');
    
          // disabling cursor events to prevent clicking after a match-up
          item1.classList.add('disable');
          item2.classList.add('disable');
          item3.classList.add('disable');
          item4.classList.add('disable');
          item5.classList.add('disable');
          item6.classList.add('disable');
    
          // the page is reloaded if this button is clicked, serves as a try again button at this point
          feed.classList.remove('disappear');
          feed.innerHTML = 'To Lvl 1';
          feed.style.backgroundColor = "#c30101";
          feed.addEventListener('click', ()=>{
              window.location.reload();
          });
      
        });
    
        // if item4 is clicked after item6 is clicked...
        item4.addEventListener('click', (e)=>{
      
          // giving the background a reddish background
          body.style.backgroundColor = "#ffb1b1";
    
          // change the content of the info box and edit the colors
          info.innerHTML = "&#x1F6C8; Wrong match 🤪";
          info.style.color = "red";
          
          // giving styles if this item is clicked after item6, this is the wrong option
          item6.style.backgroundColor = 'red';
          item6.style.color = 'white';
          item4.style.backgroundColor = 'red';
          item4.style.color = 'white';
          console.log('Wrong match');
    
          // disabling cursor events to prevent clicking after a match-up
          item1.classList.add('disable');
          item2.classList.add('disable');
          item3.classList.add('disable');
          item4.classList.add('disable');
          item5.classList.add('disable');
          item6.classList.add('disable');
    
          // the page is reloaded if this button is clicked, serves as a try again button at this point
          feed.classList.remove('disappear');
          feed.innerHTML = 'To Lvl 1';
          feed.style.backgroundColor = "#c30101";
          feed.addEventListener('click', ()=>{
              window.location.reload();
          });
      
        });
    
        // if item5 is clicked after item6 is clicked...
        item5.addEventListener('click', (e)=>{
      
          // giving the background a reddish background
          body.style.backgroundColor = "#ffb1b1";
    
          // change the content of the info box and edit the colors
          info.innerHTML = "&#x1F6C8; Wrong match 🤪";
          info.style.color = "red";
          
          // giving styles if this item is clicked after item6, this is the wrong option
          item6.style.backgroundColor = 'red';
          item6.style.color = 'white';
          item5.style.backgroundColor = 'red';
          item5.style.color = 'white';
          console.log('Wrong match');
    
          // disabling cursor events to prevent clicking after a match-up
          item1.classList.add('disable');
          item2.classList.add('disable');
          item3.classList.add('disable');
          item4.classList.add('disable');
          item5.classList.add('disable');
          item6.classList.add('disable');
    
          // the page is reloaded if this button is clicked, serves as a try again button at this point
          feed.classList.remove('disappear');
          feed.innerHTML = 'To Lvl 1';
          feed.style.backgroundColor = "#c30101";
          feed.addEventListener('click', ()=>{
              window.location.reload();
          });
      
        });
      
      });

    });

    // =======================================================================================================
          

  });


  // if item1 is clicked after item2 is clicked...
  item1.addEventListener('click', (e)=>{

      // giving the background a reddish background
      body.style.backgroundColor = "#ffb1b1";

      // change the content of the info box and edit the colors
      info.innerHTML = "&#x1F6C8; Wrong match 🤪";
      info.style.color = "red";

      // giving styles if this item is clicked after item2, this is the correct option
      item2.style.backgroundColor = 'red';
      item2.style.color = 'white';
      item1.style.backgroundColor = 'red';
      item1.style.color = 'white';
      console.log('Wrong match');

      // disabling cursor events to prevent clicking after a match-up
      item1.classList.add('disable');
      item2.classList.add('disable');
      item3.classList.add('disable');

      // the page is reloaded if this button is clicked, serves as a try again button at this point
      feed.innerHTML = 'Try Again';
      feed.style.backgroundColor = "#c30101";
      feed.addEventListener('click', ()=>{
          window.location.reload();
      });

  });

});



item3.addEventListener('click', (e)=>{

  item3.classList.add('rotate');

  // change the content of the info box
  info.innerHTML = "&#x1F6C8; Choose a match 😦";

  // giving color stylings if item3 was the first clicked item
  item3.style.backgroundColor = 'green';
  item3.style.color = 'white';
  // removing the disappear classlist to make the button visible
  feed.classList.remove('disappear');

  // the page is reloaded if this button is clicked, it serves as a start over button at this point
  feed.addEventListener('click', ()=>{
      window.location.reload();
  });

  // Message if the user clicks the same card again
  item3.addEventListener('click', (e)=>{
      alert("Click another card 🤌");
  })

  // if item1 is clicked after item3 is clicked...
  item1.addEventListener('click', (e)=>{

    // giving the background a greenish background
    body.style.backgroundColor = "#a3f9a3";

    // change the content of the info box and edit the colors
    info.innerHTML = "&#x1F6C8; Correct match 👍";
    info.style.color = "green";

    // giving styles if this item is clicked after item3, this is the correct option
    item1.style.backgroundColor = 'green';
    item1.style.color = 'white';
    console.log('Match successful');

    // disabling cursor events to prevent clicking after a match-up
    item1.classList.add('disable');
    item2.classList.add('disable');
    item3.classList.add('disable');

    // the page is reloaded if this button is clicked, serves as a Restart button at this point
    feed.innerHTML = 'Restart';
    feed.style.backgroundColor = "#005400";
    feed.addEventListener('click', ()=>{
        window.location.reload();
    });

    // makes button visible
    next.classList.remove('disappear');
    //=================================== takes player to next level ========================================

    next.addEventListener('click', (e)=>{

        // reset body color
        body.style.backgroundColor = "#dbdbff";

        // changes the numbers on the level count
        level.innerHTML = "(LVL 02 OF 02)";

        // reset info styles and text
        info.innerHTML = "&#x1F6C8; Choose a card 🤞";
        info.style.color = "";

        // remove buttons
        feed.classList.add('disappear');
        next.classList.add('disappear'); 
      
        // creating html elements and assigning classes and values to them

        let item1 = document.createElement('div');
        item1.classList.add('item1');
        item1.innerHTML = "One";
      
        let item2 = document.createElement('div');
        item2.classList.add('item2');
        item2.innerHTML = "Two";
      
        let item3 = document.createElement('div');
        item3.classList.add('item3');
        item3.innerHTML = "Three";
      
        
        let item4 = document.createElement('div');
        item4.classList.add('item4');
        item4.innerHTML = "Four";
        
        let item5 = document.createElement('div');
        item5.classList.add('item5');
        item5.innerHTML = "Five";
        
        let item6 = document.createElement('div');
        item6.classList.add('item6');
        item6.innerHTML = "Six";
        
        
        // putting created elements in parent element
        cover.innerHTML = "";
        cover.appendChild(item1);
        cover.appendChild(item2);
        cover.appendChild(item3);
        cover.appendChild(item4);
        cover.appendChild(item5);
        cover.appendChild(item6);
      
      
      
      
        
        item1.addEventListener('click', (e)=>{

          item1.classList.add('rotate');

          // change the content of the info box
          info.innerHTML = "&#x1F6C8; Choose a match 😦";
        
          // giving color stylings if item1 was the first clicked item
          item1.style.backgroundColor = 'green';
          item1.style.color = 'white';
        
          // Message if the user clicks the same card again
          item1.addEventListener('click', (e)=>{
              alert("Click another card 🤌");
          })
        
          // if item5 is clicked after item1 is clicked...
          item5.addEventListener('click', (e)=>{
        
            // giving the background a greenish background
            body.style.backgroundColor = "#a3f9a3";
      
            // change the content of the info box and edit the colors
            info.innerHTML = "&#x1F6C8; Correct match 👍";
            info.style.color = "green";
      
            // giving styles if this item is clicked after item1, this is the correct option
            item5.style.backgroundColor = 'green';
            item5.style.color = 'white';
            console.log('Match successful');
      
            // disabling cursor events to prevent clicking after a match-up
            item1.classList.add('disable');
            item2.classList.add('disable');
            item3.classList.add('disable');
            item4.classList.add('disable');
            item5.classList.add('disable');
            item6.classList.add('disable');
      
      
            // shows congrats page 
            next.innerHTML = 'Proceed';
            next.classList.remove('disappear');
            next.addEventListener('click', (e)=>{
              level.classList.add('hide');
              info.classList.add('hide');
              cover.classList.add('hide');
              congrats.classList.remove('hide');
            });
        
          });
        
          // if item2 is clicked after item1 is clicked...
          item2.addEventListener('click', (e)=>{
        
            // giving the background a reddish background
            body.style.backgroundColor = "#ffb1b1";
      
            // change the content of the info box and edit the colors
            info.innerHTML = "&#x1F6C8; Wrong match 🤪";
            info.style.color = "red";
            
            // giving styles if this item is clicked after item1, this is the wrong option
            item1.style.backgroundColor = 'red';
            item1.style.color = 'white';
            item2.style.backgroundColor = 'red';
            item2.style.color = 'white';
            console.log('Wrong match');
      
            // disabling cursor events to prevent clicking after a match-up
            item1.classList.add('disable');
            item2.classList.add('disable');
            item3.classList.add('disable');
            item4.classList.add('disable');
            item5.classList.add('disable');
            item6.classList.add('disable');
      
            // the page is reloaded if this button is clicked, serves as a try again button at this point
            feed.classList.remove('disappear');
            feed.innerHTML = 'To Lvl 1';
            feed.style.backgroundColor = "#c30101";
            feed.addEventListener('click', ()=>{
                window.location.reload();
            });
        
          });
      
          // if item3 is clicked after item1 is clicked...
          item3.addEventListener('click', (e)=>{
        
            // giving the background a reddish background
            body.style.backgroundColor = "#ffb1b1";
      
            // change the content of the info box and edit the colors
            info.innerHTML = "&#x1F6C8; Wrong match 🤪";
            info.style.color = "red";
            
            // giving styles if this item is clicked after item1, this is the wrong option
            item1.style.backgroundColor = 'red';
            item1.style.color = 'white';
            item3.style.backgroundColor = 'red';
            item3.style.color = 'white';
            console.log('Wrong match');
      
            // disabling cursor events to prevent clicking after a match-up
            item1.classList.add('disable');
            item2.classList.add('disable');
            item3.classList.add('disable');
            item4.classList.add('disable');
            item5.classList.add('disable');
            item6.classList.add('disable');
      
            // the page is reloaded if this button is clicked, serves as a try again button at this point
            feed.classList.remove('disappear');
            feed.innerHTML = 'To Lvl 1';
            feed.style.backgroundColor = "#c30101";
            feed.addEventListener('click', ()=>{
                window.location.reload();
            });
        
          });
      
          // if item4 is clicked after item1 is clicked...
          item4.addEventListener('click', (e)=>{
        
            // giving the background a reddish background
            body.style.backgroundColor = "#ffb1b1";
      
            // change the content of the info box and edit the colors
            info.innerHTML = "&#x1F6C8; Wrong match 🤪";
            info.style.color = "red";
            
            // giving styles if this item is clicked after item1, this is the wrong option
            item1.style.backgroundColor = 'red';
            item1.style.color = 'white';
            item4.style.backgroundColor = 'red';
            item4.style.color = 'white';
            console.log('Wrong match');
      
            // disabling cursor events to prevent clicking after a match-up
            item1.classList.add('disable');
            item2.classList.add('disable');
            item3.classList.add('disable');
            item4.classList.add('disable');
            item5.classList.add('disable');
            item6.classList.add('disable');
      
            // the page is reloaded if this button is clicked, serves as a try again button at this point
            feed.classList.remove('disappear');
            feed.innerHTML = 'To Lvl 1';
            feed.style.backgroundColor = "#c30101";
            feed.addEventListener('click', ()=>{
                window.location.reload();
            });
        
          });
      
          // if item6 is clicked after item1 is clicked...
          item6.addEventListener('click', (e)=>{
        
            // giving the background a reddish background
            body.style.backgroundColor = "#ffb1b1";
      
            // change the content of the info box and edit the colors
            info.innerHTML = "&#x1F6C8; Wrong match 🤪";
            info.style.color = "red";
            
            // giving styles if this item is clicked after item1, this is the wrong option
            item1.style.backgroundColor = 'red';
            item1.style.color = 'white';
            item6.style.backgroundColor = 'red';
            item6.style.color = 'white';
            console.log('Wrong match');
      
            // disabling cursor events to prevent clicking after a match-up
            item1.classList.add('disable');
            item2.classList.add('disable');
            item3.classList.add('disable');
            item4.classList.add('disable');
            item5.classList.add('disable');
            item6.classList.add('disable');
      
            // the page is reloaded if this button is clicked, serves as a try again button at this point
            feed.classList.remove('disappear');
            feed.innerHTML = 'To Lvl 1';
            feed.style.backgroundColor = "#c30101";
            feed.addEventListener('click', ()=>{
                window.location.reload();
            });
        
          });
        
        });
        
        
        item2.addEventListener('click', (e)=>{

          item2.classList.add('rotate');

          // change the content of the info box
          info.innerHTML = "&#x1F6C8; Choose a match 😦";
        
          // giving color stylings if item2 was the first clicked item
          item2.style.backgroundColor = 'green';
          item2.style.color = 'white';
        
          // Message if the user clicks the same card again
          item2.addEventListener('click', (e)=>{
              alert("Click another card 🤌");
          })
        
          // if item4 is clicked after item2 is clicked...
          item4.addEventListener('click', (e)=>{
        
            // giving the background a greenish background
            body.style.backgroundColor = "#a3f9a3";
      
            // change the content of the info box and edit the colors
            info.innerHTML = "&#x1F6C8; Correct match 👍";
            info.style.color = "green";
      
            // giving styles if this item is clicked after item2, this is the correct option
            item4.style.backgroundColor = 'green';
            item4.style.color = 'white';
            console.log('Match successful');
      
            // disabling cursor events to prevent clicking after a match-up
            item1.classList.add('disable');
            item2.classList.add('disable');
            item3.classList.add('disable');
            item4.classList.add('disable');
            item5.classList.add('disable');
            item6.classList.add('disable');
      
      
            // shows congrats page 
            next.innerHTML = 'Proceed';
            next.classList.remove('disappear');
            next.addEventListener('click', (e)=>{
              level.classList.add('hide');
              info.classList.add('hide');
              cover.classList.add('hide');
              congrats.classList.remove('hide');
            });
        
          });
        
          // if item1 is clicked after item2 is clicked...
          item1.addEventListener('click', (e)=>{
        
            // giving the background a reddish background
            body.style.backgroundColor = "#ffb1b1";
      
            // change the content of the info box and edit the colors
            info.innerHTML = "&#x1F6C8; Wrong match 🤪";
            info.style.color = "red";
            
            // giving styles if this item is clicked after item1, this is the wrong option
            item2.style.backgroundColor = 'red';
            item2.style.color = 'white';
            item1.style.backgroundColor = 'red';
            item1.style.color = 'white';
            console.log('Wrong match');
      
            // disabling cursor events to prevent clicking after a match-up
            item1.classList.add('disable');
            item2.classList.add('disable');
            item3.classList.add('disable');
            item4.classList.add('disable');
            item5.classList.add('disable');
            item6.classList.add('disable');
      
            // the page is reloaded if this button is clicked, serves as a try again button at this point
            feed.classList.remove('disappear');
            feed.innerHTML = 'To Lvl 1';
            feed.style.backgroundColor = "#c30101";
            feed.addEventListener('click', ()=>{
                window.location.reload();
            });
        
          });
      
          // if item3 is clicked after item2 is clicked...
          item3.addEventListener('click', (e)=>{
        
            // giving the background a reddish background
            body.style.backgroundColor = "#ffb1b1";
      
            // change the content of the info box and edit the colors
            info.innerHTML = "&#x1F6C8; Wrong match 🤪";
            info.style.color = "red";
            
            // giving styles if this item is clicked after item2, this is the wrong option
            item2.style.backgroundColor = 'red';
            item2.style.color = 'white';
            item3.style.backgroundColor = 'red';
            item3.style.color = 'white';
            console.log('Wrong match');
      
            // disabling cursor events to prevent clicking after a match-up
            item1.classList.add('disable');
            item2.classList.add('disable');
            item3.classList.add('disable');
            item4.classList.add('disable');
            item5.classList.add('disable');
            item6.classList.add('disable');
      
            // the page is reloaded if this button is clicked, serves as a try again button at this point
            feed.classList.remove('disappear');
            feed.innerHTML = 'To Lvl 1';
            feed.style.backgroundColor = "#c30101";
            feed.addEventListener('click', ()=>{
                window.location.reload();
            });
        
          });
      
          // if item5 is clicked after item2 is clicked...
          item5.addEventListener('click', (e)=>{
        
            // giving the background a reddish background
            body.style.backgroundColor = "#ffb1b1";
      
            // change the content of the info box and edit the colors
            info.innerHTML = "&#x1F6C8; Wrong match 🤪";
            info.style.color = "red";
            
            // giving styles if this item is clicked after item2, this is the wrong option
            item2.style.backgroundColor = 'red';
            item2.style.color = 'white';
            item5.style.backgroundColor = 'red';
            item5.style.color = 'white';
            console.log('Wrong match');
      
            // disabling cursor events to prevent clicking after a match-up
            item1.classList.add('disable');
            item2.classList.add('disable');
            item3.classList.add('disable');
            item4.classList.add('disable');
            item5.classList.add('disable');
            item6.classList.add('disable');
      
            // the page is reloaded if this button is clicked, serves as a try again button at this point
            feed.classList.remove('disappear');
            feed.innerHTML = 'To Lvl 1';
            feed.style.backgroundColor = "#c30101";
            feed.addEventListener('click', ()=>{
                window.location.reload();
            });
        
          });
      
          // if item6 is clicked after item2 is clicked...
          item6.addEventListener('click', (e)=>{
        
            // giving the background a reddish background
            body.style.backgroundColor = "#ffb1b1";
      
            // change the content of the info box and edit the colors
            info.innerHTML = "&#x1F6C8; Wrong match 🤪";
            info.style.color = "red";
            
            // giving styles if this item is clicked after item2, this is the wrong option
            item2.style.backgroundColor = 'red';
            item2.style.color = 'white';
            item6.style.backgroundColor = 'red';
            item6.style.color = 'white';
            console.log('Wrong match');
      
            // disabling cursor events to prevent clicking after a match-up
            item1.classList.add('disable');
            item2.classList.add('disable');
            item3.classList.add('disable');
            item4.classList.add('disable');
            item5.classList.add('disable');
            item6.classList.add('disable');
      
            // the page is reloaded if this button is clicked, serves as a try again button at this point
            feed.classList.remove('disappear');
            feed.innerHTML = 'To Lvl 1';
            feed.style.backgroundColor = "#c30101";
            feed.addEventListener('click', ()=>{
                window.location.reload();
            });
        
          });
        
        });
        
        
        item3.addEventListener('click', (e)=>{

          item3.classList.add('rotate');

          // change the content of the info box
          info.innerHTML = "&#x1F6C8; Choose a match 😦";
        
          // giving color stylings if item3 was the first clicked item
          item3.style.backgroundColor = 'green';
          item3.style.color = 'white';
        
          // Message if the user clicks the same card again
          item3.addEventListener('click', (e)=>{
              alert("Click another card 🤌");
          })
        
          // if item5 is clicked after item3 is clicked...
          item5.addEventListener('click', (e)=>{
        
            // giving the background a greenish background
            body.style.backgroundColor = "#a3f9a3";
      
            // change the content of the info box and edit the colors
            info.innerHTML = "&#x1F6C8; Correct match 👍";
            info.style.color = "green";
      
            // giving styles if this item is clicked after item3, this is the correct option
            item5.style.backgroundColor = 'green';
            item5.style.color = 'white';
            console.log('Match successful');
      
            // disabling cursor events to prevent clicking after a match-up
            item1.classList.add('disable');
            item2.classList.add('disable');
            item3.classList.add('disable');
            item4.classList.add('disable');
            item5.classList.add('disable');
            item6.classList.add('disable');
      
      
            // shows congrats page 
            next.innerHTML = 'Proceed';
            next.classList.remove('disappear');
            next.addEventListener('click', (e)=>{
              level.classList.add('hide');
              info.classList.add('hide');
              cover.classList.add('hide');
              congrats.classList.remove('hide');
            });
        
          });
        
          // if item2 is clicked after item3 is clicked...
          item2.addEventListener('click', (e)=>{
        
            // giving the background a reddish background
            body.style.backgroundColor = "#ffb1b1";
      
            // change the content of the info box and edit the colors
            info.innerHTML = "&#x1F6C8; Wrong match 🤪";
            info.style.color = "red";
            
            // giving styles if this item is clicked after item3, this is the wrong option
            item3.style.backgroundColor = 'red';
            item3.style.color = 'white';
            item2.style.backgroundColor = 'red';
            item2.style.color = 'white';
            console.log('Wrong match');
      
            // disabling cursor events to prevent clicking after a match-up
            item1.classList.add('disable');
            item2.classList.add('disable');
            item3.classList.add('disable');
            item4.classList.add('disable');
            item5.classList.add('disable');
            item6.classList.add('disable');
      
            // the page is reloaded if this button is clicked, serves as a try again button at this point
            feed.classList.remove('disappear');
            feed.innerHTML = 'To Lvl 1';
            feed.style.backgroundColor = "#c30101";
            feed.addEventListener('click', ()=>{
                window.location.reload();
            });
        
          });
      
          // if item1 is clicked after item3 is clicked...
          item1.addEventListener('click', (e)=>{
        
            // giving the background a reddish background
            body.style.backgroundColor = "#ffb1b1";
      
            // change the content of the info box and edit the colors
            info.innerHTML = "&#x1F6C8; Wrong match 🤪";
            info.style.color = "red";
            
            // giving styles if this item is clicked after item1, this is the wrong option
            item3.style.backgroundColor = 'red';
            item3.style.color = 'white';
            item1.style.backgroundColor = 'red';
            item1.style.color = 'white';
            console.log('Wrong match');
      
            // disabling cursor events to prevent clicking after a match-up
            item1.classList.add('disable');
            item2.classList.add('disable');
            item3.classList.add('disable');
            item4.classList.add('disable');
            item5.classList.add('disable');
            item6.classList.add('disable');
      
            // the page is reloaded if this button is clicked, serves as a try again button at this point
            feed.classList.remove('disappear');
            feed.innerHTML = 'To Lvl 1';
            feed.style.backgroundColor = "#c30101";
            feed.addEventListener('click', ()=>{
                window.location.reload();
            });
        
          });
      
          // if item4 is clicked after item3 is clicked...
          item4.addEventListener('click', (e)=>{
        
            // giving the background a reddish background
            body.style.backgroundColor = "#ffb1b1";
      
            // change the content of the info box and edit the colors
            info.innerHTML = "&#x1F6C8; Wrong match 🤪";
            info.style.color = "red";
            
            // giving styles if this item is clicked after item3, this is the wrong option
            item3.style.backgroundColor = 'red';
            item3.style.color = 'white';
            item4.style.backgroundColor = 'red';
            item4.style.color = 'white';
            console.log('Wrong match');
      
            // disabling cursor events to prevent clicking after a match-up
            item1.classList.add('disable');
            item2.classList.add('disable');
            item3.classList.add('disable');
            item4.classList.add('disable');
            item5.classList.add('disable');
            item6.classList.add('disable');
      
            // the page is reloaded if this button is clicked, serves as a try again button at this point
            feed.classList.remove('disappear');
            feed.innerHTML = 'To Lvl 1';
            feed.style.backgroundColor = "#c30101";
            feed.addEventListener('click', ()=>{
              window.location.reload();
            });
        
          });
      
          // if item6 is clicked after item3 is clicked...
          item6.addEventListener('click', (e)=>{
        
            // giving the background a reddish background
            body.style.backgroundColor = "#ffb1b1";
      
            // change the content of the info box and edit the colors
            info.innerHTML = "&#x1F6C8; Wrong match 🤪";
            info.style.color = "red";
            
            // giving styles if this item is clicked after item3, this is the wrong option
            item3.style.backgroundColor = 'red';
            item3.style.color = 'white';
            item6.style.backgroundColor = 'red';
            item6.style.color = 'white';
            console.log('Wrong match');
      
            // disabling cursor events to prevent clicking after a match-up
            item1.classList.add('disable');
            item2.classList.add('disable');
            item3.classList.add('disable');
            item4.classList.add('disable');
            item5.classList.add('disable');
            item6.classList.add('disable');
      
            // the page is reloaded if this button is clicked, serves as a try again button at this point
            feed.classList.remove('disappear');
            feed.innerHTML = 'To Lvl 1';
            feed.style.backgroundColor = "#c30101";
            feed.addEventListener('click', ()=>{
                window.location.reload();
            });
        
          });
        
        });
      
      
        item4.addEventListener('click', (e)=>{

          item4.classList.add('rotate');

          // change the content of the info box
          info.innerHTML = "&#x1F6C8; Choose a match 😦";
        
          // giving color stylings if item4 was the first clicked item
          item4.style.backgroundColor = 'green';
          item4.style.color = 'white';
        
          // Message if the user clicks the same card again
          item4.addEventListener('click', (e)=>{
              alert("Click another card 🤌");
          })
        
          // if item6 is clicked after item4 is clicked...
          item6.addEventListener('click', (e)=>{
        
            // giving the background a greenish background
            body.style.backgroundColor = "#a3f9a3";
      
            // change the content of the info box and edit the colors
            info.innerHTML = "&#x1F6C8; Correct match 👍";
            info.style.color = "green";
      
            // giving styles if this item is clicked after item4, this is the correct option
            item6.style.backgroundColor = 'green';
            item6.style.color = 'white';
            console.log('Match successful');
      
            // disabling cursor events to prevent clicking after a match-up
            item1.classList.add('disable');
            item2.classList.add('disable');
            item3.classList.add('disable');
            item4.classList.add('disable');
            item5.classList.add('disable');
            item6.classList.add('disable');
      
      
            // shows congrats page 
            next.innerHTML = 'Proceed';
            next.classList.remove('disappear');
            next.addEventListener('click', (e)=>{
              level.classList.add('hide');
              info.classList.add('hide');
              cover.classList.add('hide');
              congrats.classList.remove('hide');
            });
        
          });
        
          // if item2 is clicked after item4 is clicked...
          item2.addEventListener('click', (e)=>{
        
            // giving the background a reddish background
            body.style.backgroundColor = "#ffb1b1";
      
            // change the content of the info box and edit the colors
            info.innerHTML = "&#x1F6C8; Wrong match 🤪";
            info.style.color = "red";
            
            // giving styles if this item is clicked after item4, this is the wrong option
            item4.style.backgroundColor = 'red';
            item4.style.color = 'white';
            item2.style.backgroundColor = 'red';
            item2.style.color = 'white';
            console.log('Wrong match');
      
            // disabling cursor events to prevent clicking after a match-up
            item1.classList.add('disable');
            item2.classList.add('disable');
            item3.classList.add('disable');
            item4.classList.add('disable');
            item5.classList.add('disable');
            item6.classList.add('disable');
      
            // the page is reloaded if this button is clicked, serves as a try again button at this point
            feed.classList.remove('disappear');
            feed.innerHTML = 'To Lvl 1';
            feed.style.backgroundColor = "#c30101";
            feed.addEventListener('click', ()=>{
                window.location.reload();
            });
        
          });
      
          // if item3 is clicked after item4 is clicked...
          item3.addEventListener('click', (e)=>{
        
            // giving the background a reddish background
            body.style.backgroundColor = "#ffb1b1";
      
            // change the content of the info box and edit the colors
            info.innerHTML = "&#x1F6C8; Wrong match 🤪";
            info.style.color = "red";
            
            // giving styles if this item is clicked after item4, this is the wrong option
            item4.style.backgroundColor = 'red';
            item4.style.color = 'white';
            item3.style.backgroundColor = 'red';
            item3.style.color = 'white';
            console.log('Wrong match');
      
            // disabling cursor events to prevent clicking after a match-up
            item1.classList.add('disable');
            item2.classList.add('disable');
            item3.classList.add('disable');
            item4.classList.add('disable');
            item5.classList.add('disable');
            item6.classList.add('disable');
      
            // the page is reloaded if this button is clicked, serves as a try again button at this point
            feed.classList.remove('disappear');
            feed.innerHTML = 'To Lvl 1';
            feed.style.backgroundColor = "#c30101";
            feed.addEventListener('click', ()=>{
                window.location.reload();
            });
        
          });
      
          // if item4 is clicked after item4 is clicked...
          item1.addEventListener('click', (e)=>{
        
            // giving the background a reddish background
            body.style.backgroundColor = "#ffb1b1";
      
            // change the content of the info box and edit the colors
            info.innerHTML = "&#x1F6C8; Wrong match 🤪";
            info.style.color = "red";
            
            // giving styles if this item is clicked after item1, this is the wrong option
            item4.style.backgroundColor = 'red';
            item4.style.color = 'white';
            item1.style.backgroundColor = 'red';
            item1.style.color = 'white';
            console.log('Wrong match');
      
            // disabling cursor events to prevent clicking after a match-up
            item1.classList.add('disable');
            item2.classList.add('disable');
            item3.classList.add('disable');
            item4.classList.add('disable');
            item5.classList.add('disable');
            item6.classList.add('disable');
      
            // the page is reloaded if this button is clicked, serves as a try again button at this point
            feed.classList.remove('disappear');
            feed.innerHTML = 'To Lvl 1';
            feed.style.backgroundColor = "#c30101";
            feed.addEventListener('click', ()=>{
                window.location.reload();
            });
        
          });
      
          // if item6 is clicked after item4 is clicked...
          item5.addEventListener('click', (e)=>{
        
            // giving the background a reddish background
            body.style.backgroundColor = "#ffb1b1";
      
            // change the content of the info box and edit the colors
            info.innerHTML = "&#x1F6C8; Wrong match 🤪";
            info.style.color = "red";
            
            // giving styles if this item is clicked after item4, this is the wrong option
            item4.style.backgroundColor = 'red';
            item4.style.color = 'white';
            item5.style.backgroundColor = 'red';
            item5.style.color = 'white';
            console.log('Wrong match');
      
            // disabling cursor events to prevent clicking after a match-up
            item1.classList.add('disable');
            item2.classList.add('disable');
            item3.classList.add('disable');
            item4.classList.add('disable');
            item5.classList.add('disable');
            item6.classList.add('disable');
      
            // the page is reloaded if this button is clicked, serves as a try again button at this point
            feed.classList.remove('disappear');
            feed.innerHTML = 'To Lvl 1';
            feed.style.backgroundColor = "#c30101";
            feed.addEventListener('click', ()=>{
                window.location.reload();
            });
        
          });
        
        });
      
      
        item5.addEventListener('click', (e)=>{

          item5.classList.add('rotate');

          // change the content of the info box
          info.innerHTML = "&#x1F6C8; Choose a match 😦";
        
          // giving color stylings if item5 was the first clicked item
          item5.style.backgroundColor = 'green';
          item5.style.color = 'white';
        
          // Message if the user clicks the same card again
          item5.addEventListener('click', (e)=>{
              alert("Click another card 🤌");
          })
        
          // if item1 is clicked after item5 is clicked...
          item1.addEventListener('click', (e)=>{
        
            // giving the background a greenish background
            body.style.backgroundColor = "#a3f9a3";
      
            // change the content of the info box and edit the colors
            info.innerHTML = "&#x1F6C8; Correct match 👍";
            info.style.color = "green";
      
            // giving styles if this item is clicked after item5, this is the correct option
            item1.style.backgroundColor = 'green';
            item1.style.color = 'white';
            console.log('Match successful');
      
            // disabling cursor events to prevent clicking after a match-up
            item1.classList.add('disable');
            item2.classList.add('disable');
            item3.classList.add('disable');
            item4.classList.add('disable');
            item5.classList.add('disable');
            item6.classList.add('disable');
      
      
            // shows congrats page 
            next.innerHTML = 'Proceed';
            next.classList.remove('disappear');
            next.addEventListener('click', (e)=>{
              level.classList.add('hide');
              info.classList.add('hide');
              cover.classList.add('hide');
              congrats.classList.remove('hide');
            });
        
          });
        
          // if item2 is clicked after item5 is clicked...
          item2.addEventListener('click', (e)=>{
        
            // giving the background a reddish background
            body.style.backgroundColor = "#ffb1b1";
      
            // change the content of the info box and edit the colors
            info.innerHTML = "&#x1F6C8; Wrong match 🤪";
            info.style.color = "red";
            
            // giving styles if this item is clicked after item5, this is the wrong option
            item5.style.backgroundColor = 'red';
            item5.style.color = 'white';
            item2.style.backgroundColor = 'red';
            item2.style.color = 'white';
            console.log('Wrong match');
      
            // disabling cursor events to prevent clicking after a match-up
            item1.classList.add('disable');
            item2.classList.add('disable');
            item3.classList.add('disable');
            item4.classList.add('disable');
            item5.classList.add('disable');
            item6.classList.add('disable');
      
            // the page is reloaded if this button is clicked, serves as a try again button at this point
            feed.classList.remove('disappear');
            feed.innerHTML = 'To Lvl 1';
            feed.style.backgroundColor = "#c30101";
            feed.addEventListener('click', ()=>{
                window.location.reload();
            });
        
          });
      
          // if item3 is clicked after item5 is clicked...
          item3.addEventListener('click', (e)=>{
        
            // giving the background a reddish background
            body.style.backgroundColor = "#ffb1b1";
      
            // change the content of the info box and edit the colors
            info.innerHTML = "&#x1F6C8; Wrong match 🤪";
            info.style.color = "red";
            
            // giving styles if this item is clicked after item5, this is the wrong option
            item5.style.backgroundColor = 'red';
            item5.style.color = 'white';
            item3.style.backgroundColor = 'red';
            item3.style.color = 'white';
            console.log('Wrong match');
      
            // disabling cursor events to prevent clicking after a match-up
            item1.classList.add('disable');
            item2.classList.add('disable');
            item3.classList.add('disable');
            item4.classList.add('disable');
            item5.classList.add('disable');
            item6.classList.add('disable');
      
            // the page is reloaded if this button is clicked, serves as a try again button at this point
            feed.classList.remove('disappear');
            feed.innerHTML = 'To Lvl 1';
            feed.style.backgroundColor = "#c30101";
            feed.addEventListener('click', ()=>{
                window.location.reload();
            });
        
          });
      
          // if item4 is clicked after item5 is clicked...
          item4.addEventListener('click', (e)=>{
        
            // giving the background a reddish background
            body.style.backgroundColor = "#ffb1b1";
      
            // change the content of the info box and edit the colors
            info.innerHTML = "&#x1F6C8; Wrong match 🤪";
            info.style.color = "red";
            
            // giving styles if this item is clicked after item5, this is the wrong option
            item5.style.backgroundColor = 'red';
            item5.style.color = 'white';
            item4.style.backgroundColor = 'red';
            item4.style.color = 'white';
            console.log('Wrong match');
      
            // disabling cursor events to prevent clicking after a match-up
            item1.classList.add('disable');
            item2.classList.add('disable');
            item3.classList.add('disable');
            item4.classList.add('disable');
            item5.classList.add('disable');
            item6.classList.add('disable');
      
            // the page is reloaded if this button is clicked, serves as a try again button at this point
            feed.classList.remove('disappear');
            feed.innerHTML = 'To Lvl 1';
            feed.style.backgroundColor = "#c30101";
            feed.addEventListener('click', ()=>{
                window.location.reload();
            });
        
          });
      
          // if item6 is clicked after item5 is clicked...
          item6.addEventListener('click', (e)=>{
        
            // giving the background a reddish background
            body.style.backgroundColor = "#ffb1b1";
      
            // change the content of the info box and edit the colors
            info.innerHTML = "&#x1F6C8; Wrong match 🤪";
            info.style.color = "red";
            
            // giving styles if this item is clicked after item5, this is the wrong option
            item5.style.backgroundColor = 'red';
            item5.style.color = 'white';
            item6.style.backgroundColor = 'red';
            item6.style.color = 'white';
            console.log('Wrong match');
      
            // disabling cursor events to prevent clicking after a match-up
            item1.classList.add('disable');
            item2.classList.add('disable');
            item3.classList.add('disable');
            item4.classList.add('disable');
            item5.classList.add('disable');
            item6.classList.add('disable');
      
            // the page is reloaded if this button is clicked, serves as a try again button at this point
            feed.classList.remove('disappear');
            feed.innerHTML = 'To Lvl 1';
            feed.style.backgroundColor = "#c30101";
            feed.addEventListener('click', ()=>{
                window.location.reload();
            });
        
          });
        
        });
      
      
        item6.addEventListener('click', (e)=>{

          item6.classList.add('rotate');

          // change the content of the info box
          info.innerHTML = "&#x1F6C8; Choose a match 😦";
        
          // giving color stylings if item6 was the first clicked item
          item6.style.backgroundColor = 'green';
          item6.style.color = 'white';
        
          // Message if the user clicks the same card again
          item6.addEventListener('click', (e)=>{
            alert("Click another card 🤌");
          })
        
          // if item2 is clicked after item6 is clicked...
          item2.addEventListener('click', (e)=>{
        
            // giving the background a greenish background
            body.style.backgroundColor = "#a3f9a3";
      
            // change the content of the info box and edit the colors
            info.innerHTML = "&#x1F6C8; Correct match 👍";
            info.style.color = "green";
      
            // giving styles if this item is clicked after item6, this is the correct option
            item2.style.backgroundColor = 'green';
            item2.style.color = 'white';
            console.log('Match successful');
      
            // disabling cursor events to prevent clicking after a match-up
            item1.classList.add('disable');
            item2.classList.add('disable');
            item3.classList.add('disable');
            item4.classList.add('disable');
            item5.classList.add('disable');
            item6.classList.add('disable');
      
      
            // shows congrats page 
            next.innerHTML = 'Proceed';
            next.classList.remove('disappear');
            next.addEventListener('click', (e)=>{
              level.classList.add('hide');
              info.classList.add('hide');
              cover.classList.add('hide');
              congrats.classList.remove('hide');
            });
        
          });
        
          // if item1 is clicked after item6 is clicked...
          item1.addEventListener('click', (e)=>{
        
            // giving the background a reddish background
            body.style.backgroundColor = "#ffb1b1";
      
            // change the content of the info box and edit the colors
            info.innerHTML = "&#x1F6C8; Wrong match 🤪";
            info.style.color = "red";
            
            // giving styles if this item is clicked after item1, this is the wrong option
            item6.style.backgroundColor = 'red';
            item6.style.color = 'white';
            item1.style.backgroundColor = 'red';
            item1.style.color = 'white';
            console.log('Wrong match');
      
            // disabling cursor events to prevent clicking after a match-up
            item1.classList.add('disable');
            item2.classList.add('disable');
            item3.classList.add('disable');
            item4.classList.add('disable');
            item5.classList.add('disable');
            item6.classList.add('disable');
      
            // the page is reloaded if this button is clicked, serves as a try again button at this point
            feed.classList.remove('disappear');
            feed.innerHTML = 'To Lvl 1';
            feed.style.backgroundColor = "#c30101";
            feed.addEventListener('click', ()=>{
                window.location.reload();
            });
        
          });
      
          // if item3 is clicked after item6 is clicked...
          item3.addEventListener('click', (e)=>{
        
            // giving the background a reddish background
            body.style.backgroundColor = "#ffb1b1";
      
            // change the content of the info box and edit the colors
            info.innerHTML = "&#x1F6C8; Wrong match 🤪";
            info.style.color = "red";
            
            // giving styles if this item is clicked after item6, this is the wrong option
            item6.style.backgroundColor = 'red';
            item6.style.color = 'white';
            item3.style.backgroundColor = 'red';
            item3.style.color = 'white';
            console.log('Wrong match');
      
            // disabling cursor events to prevent clicking after a match-up
            item1.classList.add('disable');
            item2.classList.add('disable');
            item3.classList.add('disable');
            item4.classList.add('disable');
            item5.classList.add('disable');
            item6.classList.add('disable');
      
            // the page is reloaded if this button is clicked, serves as a try again button at this point
            feed.classList.remove('disappear');
            feed.innerHTML = 'To Lvl 1';
            feed.style.backgroundColor = "#c30101";
            feed.addEventListener('click', ()=>{
                window.location.reload();
            });
        
          });
      
          // if item4 is clicked after item6 is clicked...
          item4.addEventListener('click', (e)=>{
        
            // giving the background a reddish background
            body.style.backgroundColor = "#ffb1b1";
      
            // change the content of the info box and edit the colors
            info.innerHTML = "&#x1F6C8; Wrong match 🤪";
            info.style.color = "red";
            
            // giving styles if this item is clicked after item6, this is the wrong option
            item6.style.backgroundColor = 'red';
            item6.style.color = 'white';
            item4.style.backgroundColor = 'red';
            item4.style.color = 'white';
            console.log('Wrong match');
      
            // disabling cursor events to prevent clicking after a match-up
            item1.classList.add('disable');
            item2.classList.add('disable');
            item3.classList.add('disable');
            item4.classList.add('disable');
            item5.classList.add('disable');
            item6.classList.add('disable');
      
            // the page is reloaded if this button is clicked, serves as a try again button at this point
            feed.classList.remove('disappear');
            feed.innerHTML = 'To Lvl 1';
            feed.style.backgroundColor = "#c30101";
            feed.addEventListener('click', ()=>{
                window.location.reload();
            });
        
          });
      
          // if item5 is clicked after item6 is clicked...
          item5.addEventListener('click', (e)=>{
        
            // giving the background a reddish background
            body.style.backgroundColor = "#ffb1b1";
      
            // change the content of the info box and edit the colors
            info.innerHTML = "&#x1F6C8; Wrong match 🤪";
            info.style.color = "red";
            
            // giving styles if this item is clicked after item6, this is the wrong option
            item6.style.backgroundColor = 'red';
            item6.style.color = 'white';
            item5.style.backgroundColor = 'red';
            item5.style.color = 'white';
            console.log('Wrong match');
      
            // disabling cursor events to prevent clicking after a match-up
            item1.classList.add('disable');
            item2.classList.add('disable');
            item3.classList.add('disable');
            item4.classList.add('disable');
            item5.classList.add('disable');
            item6.classList.add('disable');
      
            // the page is reloaded if this button is clicked, serves as a try again button at this point
            feed.classList.remove('disappear');
            feed.innerHTML = 'To Lvl 1';
            feed.style.backgroundColor = "#c30101";
            feed.addEventListener('click', ()=>{
                window.location.reload();
            });
        
          });
        
        });

      });

      // ======================================================================================================

  });


  // if item1 is clicked after item3 is clicked...
  item2.addEventListener('click', (e)=>{

      // giving the background a reddish background
      body.style.backgroundColor = "#ffb1b1";

      // change the content of the info box and edit the colors
      info.innerHTML = "&#x1F6C8; Wrong match 🤪";
      info.style.color = "red";

      // giving styles if this item is clicked after item3, this is the correct option
      item3.style.backgroundColor = 'red';
      item3.style.color = 'white';
      item2.style.backgroundColor = 'red';
      item2.style.color = 'white';
      console.log('Wrong match');

      // disabling cursor events to prevent clicking after a match-up
      item1.classList.add('disable');
      item2.classList.add('disable');
      item3.classList.add('disable');

      // the page is reloaded if this button is clicked, serves as a try again button at this point
      feed.innerHTML = 'Try Again';
      feed.style.backgroundColor = "#c30101";
      feed.addEventListener('click', ()=>{
          window.location.reload();
      });

  });

});



// button to restart after game is finished
const restart = document.querySelector('.restart');
restart.addEventListener('click', (e)=>{
  window.location.reload();
});
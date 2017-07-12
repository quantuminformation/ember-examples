import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement() {
    this._super(...arguments);

    function init () {
      document.querySelector('.makeDiv').addEventListener('click', function () {
        var newElement = document.createElement('div');
        newElement.innerHTML =
          "<p>Generated Div and P</p>";
        newElement.id = 'new-element';
        document.querySelector('#buttonClickMutation').appendChild(newElement);
        var newElement2 = document.createElement('div');
        newElement2.innerHTML =
          "<p>Generated Div and P 2</p>";
        newElement2.id = 'new-element2';
        document.querySelector('#buttonClickMutation').appendChild(newElement2);
        document.querySelector('#buttonClickMutation').removeChild(newElement2);
      });
      document.querySelector('#removeDiv').addEventListener('click', function () {
        var existingEl = document.querySelector('#new-element');
        if (existingEl) {
          document.querySelector('#buttonClickMutation').removeChild(document.querySelector('#new-element'));
        }
      });
      document.querySelector('#input').addEventListener('change', function () {
        var mutationElement = document.querySelector('#inputMutation');
        var target = event.target;
        mutationElement.innerText = target.value;
        // todo figure out a way to resolve mutation differences when using innerHTML
        // see http://stackoverflow.com/a/43293314/3915717
      });
      document.querySelector('#select').addEventListener('change', function (event) {
        var mutationElement = document.querySelector('#selectMutation');
        var target = event.target;
        var newSelectedIndex = target.selectedIndex;
        var newValue = target.options[newSelectedIndex].value;
        mutationElement.innerText = newValue;
      });
      //drag stuff
      Array.from(document.querySelectorAll('.dropDiv')).forEach(function (element) {
        element.addEventListener('drop', function (event) {
          event.preventDefault();
          var data = event.dataTransfer.getData("text");
          event.target.appendChild(document.getElementById(data));
        });
        element.addEventListener('dragover', function (event) {
          event.preventDefault();
        });
      });
      document.querySelector('#drag1').addEventListener('dragstart', function (event) {
        event.dataTransfer.setData("text", event.target.id);
      });

    }

    init()
  }
});

(function() {
    var focus_e=null;
    var entity_clicked=false;
    var init_first_entity=true;

    Crafty.c("ClickFocus", {
        init: function() {
          this.requires("Mouse");
          this.bind("Click", function() {
              if(focus_e) {
                focus_e.trigger("Blur");
              }
              focus_e=this;
              focus_e.trigger("Focus");
              entity_clicked=true;
            });

          if(init_first_entity) {
            init_first_entity=false;
            Crafty.addEvent(this, Crafty.stage.elem, "click", function() {
                if(!entity_clicked) {
                  if(focus_e) {
                    focus_e.trigger("Blur")
                  }
                  focus_e=null;
                }
                entity_clicked=false;
              });
          }
        }
      });
  })();

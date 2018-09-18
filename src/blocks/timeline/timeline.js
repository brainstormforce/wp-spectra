/**
 * Common js file for timeline.
 */
( function( $ ) {

// Listen for events.
window.addEventListener("load", uagbTimelineFunc);
window.addEventListener("resize", uagbTimelineFunc);
window.addEventListener("scroll", uagbTimelineFunc);

// Callback function for all event listeners.
function uagbTimelineFunc() {

    // Define variables.
    var timeline            = $('.uagb-timeline');

    timeline.each(function() {
        var timeline_main       = $(this).find( '.uagb-timeline-main' );   
        var uagb_days           = $(this).find(".uagb-days");
        var timeline_icon       = $(this).find(".uagb-timeline-marker");
        var uagb_events         = $(this).find(".uagb-events");
        var events_inner        = $(this).find(".uagb-timeline-widget");
        var line_inner          = $(this).find(".uagb-timeline__line__inner");
        var line_outer          = $(this).find(".uagb-timeline__line");
        var $main_class         = $(this).find(".elementor-widget-uagb-timeline");
        var $icon_class         = $(this).find(".uagb-timeline-marker");
        var $card_last          = $(this).find(".uagb-timeline-field:last-child");
        var $document           = $(document);
        // Set top and bottom for line.
        var timeline_start_icon = $icon_class.first().position();
        var timeline_end_icon   = $icon_class.last().position();
        line_outer.css('top', timeline_start_icon.top );

        var timeline_card_height = $card_last.height();
        var last_item_top = $card_last.offset().top - $(this).offset().top;
        var $last_item, parent_top;

        if( $(this).hasClass('uagb-timeline-arrow-center')) {

            line_outer.css('bottom', timeline_end_icon.top );

            parent_top = last_item_top - timeline_start_icon.top;
            $last_item = parent_top + timeline_end_icon.top;

        } else if( $(this).hasClass('uagb-timeline-arrow-top')) {

            var top_height = timeline_card_height - timeline_end_icon.top;
            line_outer.css('bottom', top_height );

            $last_item = last_item_top;

        } else if( $(this).hasClass('uagb-timeline-arrow-bottom')) {

            var bottom_height = timeline_card_height - timeline_end_icon.top;
            line_outer.css('bottom', bottom_height );

            parent_top = last_item_top - timeline_start_icon.top;
            $last_item = parent_top + timeline_end_icon.top;

        }

        var num = 0;
        var elementEnd = $last_item + 20;
        var viewportHeight = document.documentElement.clientHeight;
        var viewportHeightHalf = viewportHeight/2;
        var elementPos = $(this).offset().top;
        var new_elementPos = elementPos + timeline_start_icon.top;
        var photoViewportOffsetTop = new_elementPos - $document.scrollTop();

        if (photoViewportOffsetTop < 0) {
            photoViewportOffsetTop = Math.abs(photoViewportOffsetTop);
        } else {
            photoViewportOffsetTop = -Math.abs(photoViewportOffsetTop);
        }

        if ( elementPos < (viewportHeightHalf) ) {
            if ( (viewportHeightHalf) + Math.abs(photoViewportOffsetTop) < (elementEnd) ) {
                line_inner.height((viewportHeightHalf) + photoViewportOffsetTop);
            }else{
                if ( (photoViewportOffsetTop + viewportHeightHalf) >= elementEnd ) {
                    line_inner.height(elementEnd);
                }
            }
        } else {
            if ( (photoViewportOffsetTop  + viewportHeightHalf) < elementEnd ) {
                if (0 > photoViewportOffsetTop) {
                    line_inner.height((viewportHeightHalf) - Math.abs(photoViewportOffsetTop));
                    ++num;
                } else {
                    line_inner.height((viewportHeightHalf) + photoViewportOffsetTop);
                }
            }else{
                if ( (photoViewportOffsetTop + viewportHeightHalf) >= elementEnd ) {
                    line_inner.height(elementEnd);
                }
            }
        }

    })
}

} )( jQuery );
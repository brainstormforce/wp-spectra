/**
 * Set inline styles.
 * @param  {object} props - The block object.
 * @return {object} The inline background type CSS.
 */
function contentTimelineStyle( props ) {
    const {
            dateBottomspace,
            backgroundColor,
            separatorColor,
            separatorFillColor,
            separatorBg,
            separatorBorder,
            borderFocus,            
            verticalSpace,
            horizontalSpace,
            separatorwidth,
            borderwidth,
            connectorBgsize,
            borderRadius,
            bgPadding,
            width,
            readMoreText,
            icon,
            iconColor,
            authorColor,
            dateFontsize,
            dateColor,
            iconSize,
            iconFocus,
            iconBgFocus,
            tm_client_id,
            iconHover,
            iconBgHover,
            borderHover
        } = props.attributes;        

        if( props.clientId ){
            var clientId = 'uagb-'+props.clientId;
        }else{
            var clientId = 'uagb-'+tm_client_id;
        }

            var selectors = {};

            selectors['.uagb-timeline__center .uagb-tmimeline__day-right .uagb-timeline__arrow:after'] = {
                    'border-left-color' : backgroundColor,
                };

            selectors['.uagb-timeline__right .uagb-tmimeline__day-right .uagb-timeline__arrow:after'] = {
                    'border-left-color' : backgroundColor
                };

            selectors['.uagb-timeline__center .uagb-timeline__day-left .uagb-timeline__arrow:after'] = {
                    'border-right-color' : backgroundColor
                };

            selectors['.uagb-timeline__left .uagb-timeline__day-left .uagb-timeline__arrow:after'] = {
                    'border-right-color' : backgroundColor
                };

            selectors['.uagb-timeline__line__inner'] = {
                    'background-color' : separatorFillColor
                };

            selectors['.uagb-timeline__line'] = {
                    'background-color' : separatorColor,
                    'width' : separatorwidth+'px',
                };

            selectors['.uagb-timeline__right .uagb-timeline__line'] = {
                    'right' : 'calc( '+connectorBgsize+'px / 2 )',
                };

            selectors['.uagb-timeline__left .uagb-timeline__line'] = {
                    'left' : 'calc( '+connectorBgsize+'px / 2 )',
                };

            selectors['.uagb-timeline__center .uagb-timeline__line'] = {
                    'right' : 'calc( '+connectorBgsize+'px / 2 )',
                };

            selectors['.uagb-timeline__marker'] = {
                    'background-color' : separatorBg,
                    'min-height': connectorBgsize+'px',
                    'min-width' : connectorBgsize+'px',
                    'line-height' : connectorBgsize+'px',
                    'border': borderwidth+'px solid'+separatorBorder,
                };

            selectors['.uagb-timeline__left .uagb-timeline__left .uagb-timeline__arrow'] = {
                    'height' : connectorBgsize+'px',
                };

            selectors['.uagb-timeline__right .uagb-timeline__right .uagb-timeline__arrow'] = {
                    'height' : connectorBgsize+'px',
                };

            selectors['.uagb-timeline__center .uagb-timeline__left .uagb-timeline__arrow'] = {
                    'height' : connectorBgsize+'px',
                };

            selectors['.uagb-timeline__center .uagb-timeline__right .uagb-timeline__arrow'] = {
                    'height' : connectorBgsize+'px',
                };

            selectors['.uagb-timeline__center .uagb-timeline__marker'] = {
                    'margin-left' : horizontalSpace+'px',
                    'margin-right': horizontalSpace+'px',
                };

            selectors['.uagb-timeline__field:not(:last-child)'] = {
                    'margin-bottom' : verticalSpace+'px',
                };

            selectors['.uagb-timeline__date-hide.uagb-timeline__date-inner'] = {
                    'margin-bottom' : dateBottomspace+'px',
                    'color': dateColor,
                    'font-size' : dateFontsize+'px',        
                };

            selectors['.uagb-timeline__left .uagb-timeline__day-new.uagb-timeline__day-left'] = {
                    'margin-left' : horizontalSpace+'px',
                    'color': dateColor,
                    'font-size' : dateFontsize+'px',     
                };

            selectors['.uagb-timeline__right .uagb-timeline__day-new.uagb-tmimeline__day-right'] = {
                    'margin-right' : horizontalSpace+'px',
                    'color': dateColor,
                    'font-size' : dateFontsize+'px',     
                };

            selectors['.uagb-timeline__date-new'] = {
                    'color': dateColor,
                    'font-size' : dateFontsize+'px',     
                };

            selectors['.uagb-timeline__events-inner-new'] = {
                    'border-radius' : borderRadius+'px',
                    'padding': bgPadding+'px',
                };

            selectors['.uagb-timeline__main .uagb-timeline__icon-new'] = {
                    'color': iconColor,
                    'font-size' : iconSize+'px',     
                };
       
            selectors['.uagb-timeline__field.animate-border:hover .uagb-timeline__marker'] = {
                    'background' : iconBgHover,  
                    'border-color': borderHover,
                };

            selectors['.uagb-timeline__main .uagb-timeline__marker.uagb-t`imeline__in-view_icon`'] = {
                    'background' : iconBgFocus,  
                    'border-color': borderFocus,    
                };


            selectors['.uagb-timeline__field.animate-border:hover .uagb-timeline__icon-new'] = {
                    'color': iconHover,
                };

            selectors['.uagb-timeline__main .uagb-timeline__marker.uagb-t`imeline__in-view_icon` .uagb-timeline__icon-new'] = {
                    'color': iconFocus,
                };


             /* Generate Responsive CSS for timeline */
        var response_selector = {};
        response_selector['.uagb-timeline__center .uagb-timeline__marker'] = {
            'margin-left' : '0px',
            'margin-right' : '0px',
        };

        response_selector['.uagb-timeline__center .uagb-timeline__day-new.uagb-timeline__day-left'] = {
            'margin-left' : horizontalSpace+'px',
        };
        response_selector['.uagb-timeline__center .uagb-timeline__day-new.uagb-tmimeline__day-right'] = {
            'margin-left' : horizontalSpace+'px',
        };

        var styling_css = '';

        for( var i in selectors ) {

            /*var cond1 = i.includes('uagb-timeline__center');
            var cond2 = i.includes('uagb-timeline__right');
            var cond3 = i.includes('uagb-timeline__left');

            var cond = (cond1 || cond2 || cond3 );

            if( !cond ){
                styling_css += '.'+clientId+' '+i + ' { ';
            }else{
                styling_css += '.'+clientId+i + ' { ';
            }*/

             styling_css += '#uagb-ctm-'+clientId+' '+i + ' { ';           
            
            var sel = selectors[i];
            var css = '';

            for( var j in sel ) {

                css += j + ': ' + sel[j] + ';';
            }

            styling_css += css + ' } ';
        }

        // Responsive css.
        styling_css += '@media(max-width:768px){'; 
        for( var i in response_selector ) {

           
            styling_css += '#uagb-ctm-'+clientId+' '+i + ' { ';           
            
            var sel = response_selector[i];
            var css = '';

            for( var j in sel ) {

                css += j + ': ' + sel[j] + ';';
            }

            styling_css += css + ' } ';
        }        
        styling_css += '}';

        return styling_css;

}

export default contentTimelineStyle;

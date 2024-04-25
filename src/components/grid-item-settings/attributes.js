/**
 * Grid Item Settings: Attributes
 */
const attributes = {
    isGridCssInParent: {
        type: 'boolean',
        default: false,
    },
    gridSettingType: { // This will be simple or advance, and if value is empty then it will be simple.
        type: 'string',
    },
    // Grid column advance settings.
    // Desktop.
    gridColumnStart: {
        type: 'number',
    },
    gridColumnEnd: {
        type: 'number',
    },
    // Tablet. 
    gridColumnStartTablet: {
        type: 'number',
    },
    gridColumnEndTablet: {
        type: 'number',
    },
    // Mobile.
    gridColumnStartMobile: {
        type: 'number',
    },
    gridColumnEndMobile: {
        type: 'number',
    },
    // Grid row css.
    // Desktop.
    gridRowStart: {
        type: 'number',
    },
    gridRowEnd: {
        type: 'number',
    },
    // Tablet.
    gridRowStartTablet: {
        type: 'number',
    },
    gridRowEndTablet: {
        type: 'number',
    },
    // Mobile.
    gridRowStartMobile: {
        type: 'number',
    },
    gridRowEndMobile: {
        type: 'number',
    },
    // Grid align css.
    // Desktop.
    gridAlignItems: {
        type: 'string',
    },
    // Tablet.
    gridAlignItemsTablet: {
        type: 'string',
    },
    // Mobile.
    gridAlignItemsMobile: {
        type: 'string',
    },
    // Grid justify css.
    // Desktop.
    gridJustifyItems: {
        type: 'string',
    },
    // Tablet.
    gridJustifyItemsTablet: {
        type: 'string',
    },
    // Mobile.
    gridJustifyItemsMobile: {
        type: 'string',
    },
    // Grid column simple span settings.
    // Desktop.
    gridColumnSpan: {
        type: 'number',
    },
    gridRowSpan: {
        type: 'number',
    },
    // Tablet.
    gridColumnSpanTablet: {
        type: 'number',
    },
    gridRowSpanTablet: {
        type: 'number',
    },
    // Mobile.
    gridColumnSpanMobile: {
        type: 'number',
    },
    gridRowSpanMobile: {
        type: 'number',
    },
};

export default attributes;

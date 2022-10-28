const variants = {
    offscreen: {
        y: 300,
        opacity: 0,
    },
    onscreen: {
        y: 50,
        opacity: 1,
        transition: {
            type: 'tween',
            duration: 0.5,
        },
    },
};

export default variants;
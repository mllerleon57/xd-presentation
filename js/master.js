Reveal.initialize({
    autoPlayMedia: true,
    multiplex: {
        secret: '15750307091353360585',
        id: 'f52c943519b0af01',
        url: 'https://reveal-js-multiplex-ccjbegmaii.now.sh/'
    },
    dependencies: [{
            src: 'plugin/markdown/marked.js'
        },
        {
            src: 'plugin/markdown/markdown.js'
        },
        {
            src: 'plugin/notes/notes.js',
            async: true
        },
        {
            src: 'plugin/zoom-js/zoom.js',
            async: true
        },
        {
            src: 'plugin/highlight/highlight.js',
            async: true
        },
        {
            src: '//cdnjs.cloudflare.com/ajax/libs/socket.io/2.2.0/socket.io.js',
            async: true
        },
        {
            src: 'plugin/multiplex/master.js',
            async: true
        }
    ]
});
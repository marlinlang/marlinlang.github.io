hljs.registerLanguage("marlin", () => {
    return {
        case_insensitive: false, // language is case-insensitive
        keywords: [
            'public', 'private', 'protected', 'internal', 'static',
            'module', 'class', 'struct', 'using', 'new', 'get', 'set',
            'int', 'double', 'bool', 'string', 'void'
        ],
        contains: [{
                scope: 'string',
                begin: '"',
                end: '"'
            },
            hljs.COMMENT(
                '/\\*', // begin
                '\\*/', // end
                {
                    contains: [{
                        scope: 'doc',
                        begin: '@\\w+'
                    }]
                }
            ),
            hljs.COMMENT(
                '//',
                '$', {
                    contains: [{
                        begin: /\\\n/
                    }]
                }
            ), {
                className: 'number',
                variants: [{
                        begin: '\\b(0b[01\']+)'
                    },
                    {
                        begin: '(-?)\\b([\\d\']+(\\.[\\d\']*)?|\\.[\\d\']+)(d)'
                    },
                    {
                        begin: '(-?)(\\b0[x][a-fA-F0-9\']+|(\\b[\\d\']+(\\.[\\d\']*)?|\\.[\\d\']+)([eE][-+]?[\\d\']+)?)'
                    }
                ],
                relevance: 0
            }
        ]
    }
});
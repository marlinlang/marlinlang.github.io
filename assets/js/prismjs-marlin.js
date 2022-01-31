(function(Prism) {
    Prism.languages.marlin = {
        'comment': [{
                pattern: /\/\*.*\*\//,
                greedy: true
            },
            {
                pattern: /\/\/.*/,
                greedy: true
            }
        ],
        'string': {
            pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
            greedy: true
        },
        'number': [{
            pattern: /[+-]?[0-9]?\.[0-9]+/,
            greedy: true
        }, {
            pattern: /[+-]?[0-9]+/,
            greedy: true
        }],
        'entity': [{
            // Modules
            pattern: /(\b(?:module|using)\s+)([A-Za-z_][A-Za-z0-9_]*(\s*::\s*[A-Za-z_][A-Za-z0-9_]*)*)/,
            lookbehind: true,
            inside: {
                'punctuation': /::/
            }
        }, {
            // Type declarations
            pattern: /(\b(?:class|struct)\s+)([A-Za-z_][A-Za-z0-9_]*)/,
            lookbehind: true
        }],
        'keyword': {
            pattern: /\b(class|struct|public|internal|protected|private|static|module|using|get|set)\b/,
            greedy: true
        },
        'function': [{
            // Functon delcarations
            pattern: /\b(?:([A-Za-z_][A-Za-z0-9_]*((\s*::\s*[A-Za-z_][A-Za-z0-9_]*)*\.[A-Za-z_][A-Za-z0-9_]*)?)\s+)([A-Za-z_][A-Za-z0-9_]*)(?=\()/,
            lookbehind: true,
            inside: {
                'punctuation': /::/
            }
        }],
        'operator': [{
                // Type references
                pattern: /\b(void|int|bool|string|char)/,
            },
            {
                // Type references
                pattern: /\b([A-Za-z_][A-Za-z0-9_]*((\s*::\s*[A-Za-z_][A-Za-z0-9_]*)*\.[A-Za-z_][A-Za-z0-9_]*))\s+/,
                greedy: true,
                inside: {
                    'punctuation': /::/
                }
            }
        ]
    };
}(Prism));
var datas = {
    'tree': [{
            'name': 'name1',
            'tree': [{
                    'name': 'name2'
                },
                {
                    'name': 'name3'
                },
                {
                    'name': 'name4',
                    'tree': [{
                            'name': 'name5',
                            'tree': [{
                                'name': 'name12'
                            }]
                        },
                        {
                            'name': 'name6'
                        }
                    ]
                },
                {
                    'name': 'name7'
                }
            ]
        },
        {
            'name': 'name8',
            'tree': [{
                'name': 'name9'
            }]
        }
    ]
}

// node = data name
// searchForName = pathini bulmak istediğimiz data name
function findPath(node, searchForName) {

    if (node.name === searchForName) {
        return []
    }

    if (Array.isArray(node.tree)) {

        for (var treeNode of node.tree) {

            const childResult = findPath(treeNode, searchForName)

            if (Array.isArray(childResult)) {
                return [treeNode.name].concat(childResult);
            }
        }
    }
}

console.log("Parents = " + findPath(datas, 'name12'))
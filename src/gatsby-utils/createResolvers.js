const { slugify } = require("../utils");

module.exports = ({ createResolvers }) => {
    const resolvers = {
        Article: {
            postedAt: {
                resolve: (source) => {
                    return {
                        date: source.postedAt,
                        slug: slugify(source.postedAt),
                    };
                },
            },
            categories: {
                resolve: (source) => {
                    return source.categories.map((cat) => ({
                        title: cat,
                        slug: slugify(cat),
                    }));
                },
            },
            tags: {
                resolve: (source) => {
                    return source.tags.map((tag) => ({
                        title: tag,
                        slug: slugify(tag),
                    }));
                },
            },
            excerpt: {
                resolve: async (source, _args, context, info) => {
                    await context.nodeModel.prepareNodes(
                        info.parentType,
                        { parent: { excerpt: true } },
                        { parent: { excerpt: true } },
                        [info.parentType.name]
                    );

                    const newSource = context.nodeModel.getNodeById({
                        id: source.id,
                    });

                    return newSource.__gatsby_resolved.parent.excerpt;
                },
            },
            content: {
                resolve: async (source, _args, context, info) => {
                    await context.nodeModel.prepareNodes(
                        info.parentType,
                        { parent: { html: true } },
                        { parent: { html: true } },
                        [info.parentType.name]
                    );

                    const newSource = context.nodeModel.getNodeById({
                        id: source.id,
                    });

                    return newSource.__gatsby_resolved.parent.html;
                },
            },
        },
    };
    createResolvers(resolvers);
};

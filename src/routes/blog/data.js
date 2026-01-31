const blog_posts = import.meta.glob("./blog_posts/*.md", {query: "?raw", eager: true});
const values = Object.values(blog_posts);

export const posts = [
    {
        slug: "01-30-2026",
        title: 'the meaning of (my) life',
        content: values[10]
    },
    {
        slug: "01-12-2026",
        title: 'site updates!!!!!!!!!!!',
        content: values[9]
    },
    {
        slug: "04-25-2025",
        title: 'acceptance rates: a perceptual nightmare',
        content: values[8]
    },
    {
        slug: "04-05-2025",
        title: 'keep it in your brain',
        content: values[7]
    },
    {
        slug: "04-01-2025",
        title: 'insanely lucky day',
        content: values[6]
    },
    {
        slug: "03-10-2025",
        title: 'gitting gud',
        content: values[5]
    },
    {
        slug: "03-06-2025",
        title: 'disasterpeace berklee Q+A',
        content: values[4]
    },
    {
        slug: "12-23-2024",
        title: 'denver',
        content: values[3]
    },
    {
        slug: "12-04-2024",
        title: 'mike monthly november',
        content: values[2]
    },
    {
        slug: "11-04-2024",
        title: 'mike monthly - october',
        content: values[1]
    },
    {
        slug: "09-04-2024",
        title: 'Power Underneath Despair / IndieWeb Carnival September 2024',
        content: values[0]
    },
];
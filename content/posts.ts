import post1 from '../notion-data/126ce18c-fd83-8023-9ad1-d0e1809b21c3.json'
import post2 from '../notion-data/127ce18c-fd83-805c-bebd-d6772e18bf02.json'
import newPost from '../notion-data/14d74d99-f245-80e8-8099-f22584c243bb.json'

const posts = [
  {
    title: '1 시간 만에 노션과 Next.js로 블로그 만들기',
    slug: 'create-blog-in-an-hour-with-notionpresso',
    content: newPost,
    date: '2024-11-29',
    description: '1 시간 만에 블로그를 시작하며...',
    image: undefined,
  },
  {
    title: 'Maximizing the Benefits of BFF Pattern in API Design',
    slug: 'api-design-in-bff',
    content: post1,
    date: '2023-10-22',
    description:
      'Exploring the shift from domain-centric to data-centric API endpoints after introducing BFF. This article introduces BFF and DDD concepts, then proposes API endpoint design strategies in the context of the BFF pattern.',
    image: undefined,
  },
  {
    title: 'Naver Search Bar UX: Analysis and Implementation Guide',
    slug: 'naver-search-bar-ux',
    content: post2,
    date: '2023-10-23',
    description:
      "Explore the UX analysis of Naver's search bar and strategies for replicating its features. The post examines the UX triggers, selection of search results, and the refreshing of result lists. It also compares coding approaches for implementing search bar functionalities, aiming for a concise and effective execution.",
    image: undefined,
  },
] as Post[]

export default posts;

export type Post = {
  title: string;
  slug: string;
  content: { blocks: any[] };
  date: string;
  description: string;
  image?: string;
};

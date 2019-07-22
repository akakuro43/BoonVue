const metaSiteInfo = {
    siteName: 'BOON',
    domain: 'www.don-guri.com',
    fbAppId: '146752389058128',
    twitterCard: 'summary_large_image',
    ogLocal: 'ja_JP',
    formatDetection: 'telephone=no',
    robots: 'all'
}

const metaPageInfo = {
    home: {
        path: '/',
        title: '',
        description: 'トップデスクリプション',
        keywords: ''
    },
    about: {
        path: '/about',
        title: 'アバウト',
        description: '',
        keywords: ''
    },
    service: {
        path: '/service',
        title: 'サービス',
        description: '',
        keywords: ''
    },
    company: {
        path: '/company',
        title: '会社情報',
        description: '',
        keywords: ''
    },
    contact: {
        path: '/contact',
        title: 'お問い合わせ',
        description: '',
        keywords: ''
    }
}


export default function(pageId) {
    // タイトルの設定
    let title = pageId == null ? metaSiteInfo.siteName : `${metaPageInfo[pageId].title } | ${ metaSiteInfo.siteName}`;
    pageId = pageId == null ? 'home' : pageId;
    return {
        title: title,
        meta: [
            { name: 'description', content: metaPageInfo[pageId].description },
            { name: 'keywords', content: metaPageInfo[pageId].keywords},
            { property: 'og:title', content: title},
            { property: 'og:type', content: 'website' },
            { property: 'og:url', content: `https://${metaSiteInfo.domain}${metaPageInfo[pageId].path}` },
            { property: 'og:site_name', content: metaSiteInfo.siteName },
            { property: 'og:description', content: metaPageInfo[pageId].description },
            { property: 'og:locale', content: metaSiteInfo.ogLocal },
            { property: 'og:image', content: `https://${metaSiteInfo.domain}/assets/images/og_image.jpg` },
            { property: 'fb:app_id', content: metaSiteInfo.fbAppId },
            { name: 'twitter:card', content: metaSiteInfo.twitterCard },
            { name: 'twitter:title', content: title },
            { name: 'twitter:description', content: metaPageInfo[pageId].description },
            { name: 'twitter:image', content: `https://${metaSiteInfo.domain}/assets/images/og_image.jpg` },
            { name: 'twitter:url', content: `https://${metaSiteInfo.domain}${metaPageInfo[pageId].path}` },
            { name: 'format-detection', content: metaSiteInfo.formatDetection },
            { name: 'robots', content: metaSiteInfo.robots }
        ]
    }
}

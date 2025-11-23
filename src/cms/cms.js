import CMS from 'decap-cms-app'
import '../assets/sass/styles.sass'
import HomePagePreview from './preview-templates/HomePagePreview'
import AboutPagePreview from './preview-templates/AboutPagePreview'
import EstablishedBrokerPreview from './preview-templates/EstablishedBrokerPreview'
import AcquisitionsPreview from './preview-templates/AcquisitionsPreview'
import ArticlePreview from './preview-templates/ArticlePreview'
import ContactPagePreview from './preview-templates/ContactPagePreview'

CMS.init()
CMS.registerPreviewStyle('/styles.css')
CMS.registerPreviewTemplate('home', HomePagePreview)
CMS.registerPreviewTemplate('about', AboutPagePreview)
CMS.registerPreviewTemplate('established-broker', EstablishedBrokerPreview)
CMS.registerPreviewTemplate('acquisitions', AcquisitionsPreview)
CMS.registerPreviewTemplate('contact', ContactPagePreview)
CMS.registerPreviewTemplate('blog', ArticlePreview)

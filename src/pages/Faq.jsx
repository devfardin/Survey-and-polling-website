import React from 'react'
import SectionTitle from '../components/Shared/SectionTitle'

const Faq = () => {
    return (
        <div className='max-w-3xl mx-auto'>
            <div className='py-10'>
                <SectionTitle title="Frequently asked questions" align='center' />
            </div>

            <div className="collapse collapse-plus border-b pb-1 border-borderColor rounded-none mb-3">
                <input type="radio" name="my-accordion-3" checked="checked" />
                <div className="collapse-title text-xl font-medium">
                Can I customize the appearance of the surveys to match my brand's style?
                </div>
                <div className="collapse-content">
                    <p className='text-lg font-normal text-gray-500'>Yes, most polling and survey applications provide customization options for survey appearance. You can typically customize colors, fonts, and even add your logo to ensure a consistent brand experience for participants.</p>
                </div>
            </div>

            <div className="collapse collapse-plus border-b pb-1 border-borderColor rounded-none mb-3">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl font-medium">
                How can I prevent multiple submissions from the same user?
                </div>
                <div className="collapse-content">
                    <p className='text-lg font-normal text-gray-500'> Many survey applications have built-in features to prevent multiple submissions from the same user, such as IP tracking, cookies, or requiring participants to log in. Utilize these features to ensure the integrity of your survey data.</p>
                </div>
            </div>
            <div className="collapse collapse-plus border-b pb-1 border-borderColor rounded-none mb-5">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl font-medium">
                Is it possible to export survey results for further analysis?
                </div>
                <div className="collapse-content">
                    <p className='text-lg font-normal text-gray-500'>Yes, most survey applications offer the ability to export survey results in various formats (CSV, Excel, etc.). This allows you to analyze the data further, create reports, or integrate the results into other tools you may be using for analysis.</p>
                </div>
            </div>
            <div className="collapse collapse-plus border-b pb-1 border-borderColor rounded-none mb-5">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl font-medium">
                Can I set up conditional logic in my surveys?
                </div>
                <div className="collapse-content">
                    <p className='text-lg font-normal text-gray-500'>Yes, many advanced survey tools support conditional logic. This feature allows you to show or hide certain questions based on a respondent's previous answers, providing a more personalized and streamlined survey experience.</p>
                </div>
            </div>
            <div className="collapse collapse-plus border-b pb-1 border-borderColor rounded-none mb-5">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl font-medium">
                How can I ensure the security and confidentiality of survey responses?
                </div>
                <div className="collapse-content">
                    <p className='text-lg font-normal text-gray-500'>Security is a top priority for survey applications. Ensure that your chosen platform uses encryption to protect data during transmission and storage. Additionally, choose a platform that complies with data protection regulations and provides options like anonymous responses if confidentiality is crucial.</p>
                </div>
            </div>
        </div>
    )
}

export default Faq
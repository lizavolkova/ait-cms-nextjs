import { getCostumeBySlug, getBlogSettings, getAllCostumes } from '../../lib/api'
import Container from '../../components/container'
import Layout from '../../components/layout/layout'
import CostumeSection from '../../components/layout/costume-section';

export default function Index({ costume, preview }) {

    if (!costume) {
        return null
    }

    const { date, title, costumeInfo: { sourceMaterial, images, constructionImages, description, constructionNotes, inspirationText, inspirationImages, patternsSupplies } } = costume;

    return (
        <>
            <Layout preview={preview}>
                <Container>
                    <div className="prose max-w-none">
                        <h1 className="text-center">{title}</h1>
                        <p className="text-center">{date && <><b>Year Completed</b>: {date} |</> } {sourceMaterial && <><b>Source Material</b>: {sourceMaterial}</>}</p>

                        <CostumeSection description={description} images={images}/>
                        <hr />

                        { (constructionNotes?.length > 0 || constructionImages?.length) > 0 &&
                            <>
                                <h2 className="text-center">Construction Notes</h2>
                                <CostumeSection description={constructionNotes} images={constructionImages} />
                                <hr />
                            </>
                        }

                        { (inspirationText?.length > 0 || inspirationImages?.length) > 0 &&
                        <>
                            <h2 className="text-center">Inspiration & Reference</h2>
                            <CostumeSection description={inspirationText} images={inspirationImages} />
                            <hr />
                        </>
                        }

                        { patternsSupplies?.length > 0 &&
                        <>
                            <h2 className="text-center">Patterns & Supplies</h2>
                            <CostumeSection description={patternsSupplies} />
                            <hr />
                        </>
                        }

                    </div>
                </Container>
            </Layout>
        </>
    )
}

export async function getStaticProps({ params, preview = false }) {
    const settings = await getBlogSettings()
    const costume = await getCostumeBySlug(params.slug)

    return {
        props: { costume, preview, settings },
    }
}

export async function getStaticPaths() {
    const allCostumes = await getAllCostumes()

    return {
        paths: allCostumes.nodes.map((node) => `/gallery/${node.slug}`) || [],
        fallback: true,
    }
}

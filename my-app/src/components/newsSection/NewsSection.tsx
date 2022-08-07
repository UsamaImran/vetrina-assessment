import { Box } from '@mui/material'
import { POSTS_URL } from '../../constants/endpoints'
import { useFetch } from '../../hooks/useFetch'
import NewsSkeleton from '../../skeletons/NewsSkeleton'
import { INewsCardItem } from '../../types/globalTypes'
import NewsCardItem from './NewsCardItem'
import NewsSectionHeader from './NewsSectionHeader'
import { styles } from './newsSectionStyles'

const { newsSectionContainer, newsListContainer } = styles

const NewsSection = () => {
    const { data, loading, error } = useFetch(POSTS_URL)

    const renderNewsList = () => (
        <Box sx={newsListContainer}>
            {loading || error
                ? [...Array(8)].map((_, index) => (
                      <NewsSkeleton key={index} />
                  ))
                : data?.map((currentData: INewsCardItem, index: number) => (
                      <NewsCardItem key={index} {...currentData} />
                  ))}
        </Box>
    )

    return (
        <Box sx={newsSectionContainer}>
            <NewsSectionHeader />
            {renderNewsList()}
        </Box>
    )
}

export default NewsSection

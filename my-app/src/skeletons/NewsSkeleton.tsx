import { Box, Skeleton } from '@mui/material'
import { LIGHT_BLUE } from '../constants/colors'

function NewsSkeleton() {
    return (
        <Box>
            <Box className="flex " sx={{ width: '350px' }}>
                <Skeleton
                    variant="rectangular"
                    width={100}
                    height={100}
                    className="mb-2 mr-2 rounded-md bg-sky-300"
                />
                <Box>
                    {[...Array(9)].map((_, index) => (
                        <Skeleton
                            key={index}
                            variant="text"
                            width={200}
                            height={8}
                            sx={{
                                marginBottom: '3.3px',
                                backgroundColor: LIGHT_BLUE,
                            }}
                            className="mr-2 rounded-md"
                        />
                    ))}
                </Box>
            </Box>
        </Box>
    )
}

export default NewsSkeleton

import gql from "graphql-tag"

export const query_launch_list = gql `
    query launches{
        launches {
            id
            details
            launch_date_local
            launch_date_unix
            launch_date_utc
            launch_site {
                site_id
                site_name
                site_name_long
            }
            launch_success
            launch_year
            links {
                article_link
                video_link
                flickr_images
            }
            mission_id
            mission_name
        }
    } 
`
import gql from "graphql-tag"

export const launch_details = gql `
    query LaunchInfo($id: String){
        launch(id: $id) {
            launch_date_unix
            launch_date_local
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
                flickr_images
                video_link
            }
            details
            flight_number
            rocket {
                rocket_id
                rocket_name
                rocket_type
            }
        }
    }  
`
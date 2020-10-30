export function create_video_link(video_id:string) {
    let hostname = "youtube"
    let video_link = `https://www.${hostname}.com/embed/${video_id}`
    return video_link
}
mod utils {
    pub mod text_grabber;
}

use utils::text_grabber::setup_text_grabber;

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_clipboard_manager::init())
        .setup(setup_text_grabber)
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}






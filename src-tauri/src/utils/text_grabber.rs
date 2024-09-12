pub fn setup_text_grabber(app: &mut tauri::App) -> Result<(), Box<dyn std::error::Error>> {
    #[cfg(desktop)]
    {
        use tauri::Emitter;
        use get_selected_text::get_selected_text;
        use tauri_plugin_global_shortcut::{
            Code, GlobalShortcutExt, Modifiers, Shortcut, ShortcutState,
        };

        let global_shortcut = Shortcut::new(Some(Modifiers::CONTROL), Code::KeyN);
        let app_handle = app.handle().clone();
        
        app.handle().plugin(
            tauri_plugin_global_shortcut::Builder::new()
                .with_handler(move |_app, shortcut, event| {
                    if shortcut == &global_shortcut && event.state() == ShortcutState::Pressed {
                        match get_selected_text() {
                            Ok(selected_text) => {
                                println!("{}", selected_text);
                                app_handle.emit("selected-text", &selected_text).unwrap();
                            }
                            Err(_e) => {
                                println!("error occurred while getting the selected text");
                            }
                        }
                    }
                })
                .build(),
        )?;

        app.global_shortcut().register(global_shortcut)?;
    }
    Ok(())
}

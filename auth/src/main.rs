extern crate actix;
extern crate actix_web;
extern crate redis;

mod environment;
mod logger;

use actix_web::{server::HttpServer, App, HttpResponse};
use logger::*;
use std::sync::Arc;

fn main() {
    let sys = actix::System::new("web");

    //    let logger_backend = Arc::from(RedisPublishLogger::new());
    //    let logger = Logger::with_backend(logger_backend.clone());
    //
    //    logger.log("[info] Starting auth service!".into());

    let http_server = HttpServer::new(move || {
        App::new().resource("/health", |r| {
            r.f(|_| {
                HttpResponse::Ok()
                    .content_type("text/html; charset=utf-8")
                    .body(
                        "System is <strong style=\"background-color: lightgreen\">Healthy</strong>",
                    )
            })
        })
    });

    http_server
        .bind("0.0.0.0:7176")
        .expect("Can't bind to http 7176")
        .start();

    println!("Starting web service");
    let _ = sys.run();

    // TODO: Add a service healthcheck.
}

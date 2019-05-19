import { Component, OnInit } from '@angular/core';
import { map, pick } from 'lodash';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})
export class MainComponent implements OnInit {
  values: Object = [
    {
      "kind": "t3",
      "data": {
        "approved_at_utc": null,
        "subreddit": "pics",
        "selftext": "",
        "author_fullname": "t2_21a8046r",
        "saved": false,
        "mod_reason_title": null,
        "gilded": 4,
        "clicked": false,
        "title": "This sign shouldn't have to exist",
        "link_flair_richtext": [],
        "subreddit_name_prefixed": "r/pics",
        "hidden": false,
        "pwls": 6,
        "link_flair_css_class": "2",
        "downs": 0,
        "thumbnail_height": 93,
        "hide_score": false,
        "name": "t3_bq7rky",
        "quarantine": false,
        "link_flair_text_color": "light",
        "author_flair_background_color": null,
        "subreddit_type": "public",
        "ups": 20837,
        "total_awards_received": 4,
        "media_embed": {},
        "thumbnail_width": 140,
        "author_flair_template_id": null,
        "is_original_content": false,
        "user_reports": [],
        "secure_media": null,
        "is_reddit_media_domain": true,
        "is_meta": false,
        "category": null,
        "secure_media_embed": {},
        "link_flair_text": "US Politics",
        "can_mod_post": false,
        "score": 20837,
        "approved_by": null,
        "thumbnail": "https://b.thumbs.redditmedia.com/COPEW8FioXPQtjdMoFOPnrHGC3FIsnbQ_LkpykeLShQ.jpg",
        "edited": false,
        "author_flair_css_class": null,
        "author_flair_richtext": [],
        "gildings": {
          "gid_2": 4
        },
        "post_hint": "image",
        "content_categories": [
          "photography"
        ],
        "is_self": false,
        "mod_note": null,
        "created": 1558236394,
        "link_flair_type": "text",
        "wls": 6,
        "banned_by": null,
        "author_flair_type": "text",
        "domain": "i.redd.it",
        "selftext_html": null,
        "likes": null,
        "suggested_sort": null,
        "banned_at_utc": null,
        "view_count": null,
        "archived": false,
        "no_follow": false,
        "is_crosspostable": false,
        "pinned": false,
        "over_18": false,
        "preview": {
          "images": [
            {
              "source": {
                "url": "https://preview.redd.it/816d81bit0z21.jpg?auto=webp&amp;s=ea689fcae6b2746b35d9187a65537ff91b6b1941",
                "width": 800,
                "height": 534
              },
              "resolutions": [
                {
                  "url": "https://preview.redd.it/816d81bit0z21.jpg?width=108&amp;crop=smart&amp;auto=webp&amp;s=4abc87d535d3aab808a5de10abedb12c88aae4c7",
                  "width": 108,
                  "height": 72
                },
                {
                  "url": "https://preview.redd.it/816d81bit0z21.jpg?width=216&amp;crop=smart&amp;auto=webp&amp;s=9c3ef2ed5f5d7f228a9a442557991d31d2fa94eb",
                  "width": 216,
                  "height": 144
                },
                {
                  "url": "https://preview.redd.it/816d81bit0z21.jpg?width=320&amp;crop=smart&amp;auto=webp&amp;s=623982c4203f6fa6e3e2207843d90a726d3dc504",
                  "width": 320,
                  "height": 213
                },
                {
                  "url": "https://preview.redd.it/816d81bit0z21.jpg?width=640&amp;crop=smart&amp;auto=webp&amp;s=6a351614bea94124a4da5652c8f0f3e78e72d5e3",
                  "width": 640,
                  "height": 427
                }
              ],
              "variants": {},
              "id": "5DRY-Q-uiaLTUEtNki00S_IgKxgH6cNaJ7CzZ0TGH3g"
            }
          ],
          "enabled": true
        },
        "all_awardings": [
          {
            "is_enabled": true,
            "count": 4,
            "subreddit_id": null,
            "description": "Gold Award",
            "coin_reward": 100,
            "icon_width": 512,
            "icon_url": "https://www.redditstatic.com/gold/awards/icon/gold_512.png",
            "days_of_premium": 7,
            "icon_height": 512,
            "resized_icons": [
              {
                "url": "https://www.redditstatic.com/gold/awards/icon/gold_16.png",
                "width": 16,
                "height": 16
              },
              {
                "url": "https://www.redditstatic.com/gold/awards/icon/gold_32.png",
                "width": 32,
                "height": 32
              },
              {
                "url": "https://www.redditstatic.com/gold/awards/icon/gold_48.png",
                "width": 48,
                "height": 48
              },
              {
                "url": "https://www.redditstatic.com/gold/awards/icon/gold_64.png",
                "width": 64,
                "height": 64
              },
              {
                "url": "https://www.redditstatic.com/gold/awards/icon/gold_128.png",
                "width": 128,
                "height": 128
              }
            ],
            "days_of_drip_extension": 0,
            "award_type": "global",
            "coin_price": 500,
            "id": "gid_2",
            "name": "Gold"
          }
        ],
        "media_only": false,
        "link_flair_template_id": "260873e0-c9b8-11e5-be06-0ecbb6f4dd8d",
        "can_gild": false,
        "spoiler": false,
        "locked": false,
        "author_flair_text": null,
        "visited": false,
        "num_reports": null,
        "distinguished": null,
        "subreddit_id": "t5_2qh0u",
        "mod_reason_by": null,
        "removal_reason": null,
        "link_flair_background_color": "#997a66",
        "id": "bq7rky",
        "is_robot_indexable": true,
        "report_reasons": null,
        "author": "Captain_curry67",
        "num_crossposts": 3,
        "num_comments": 2617,
        "send_replies": true,
        "whitelist_status": "all_ads",
        "contest_mode": false,
        "mod_reports": [],
        "author_patreon_flair": false,
        "author_flair_text_color": null,
        "permalink": "/r/pics/comments/bq7rky/this_sign_shouldnt_have_to_exist/",
        "parent_whitelist_status": "all_ads",
        "stickied": false,
        "url": "https://i.redd.it/816d81bit0z21.jpg",
        "subreddit_subscribers": 21810570,
        "created_utc": 1558207594,
        "media": null,
        "is_video": false
      }
    },
    {
      "kind": "t3",
      "data": {
        "approved_at_utc": null,
        "subreddit": "funny",
        "selftext": "",
        "author_fullname": "t2_399z1pqh",
        "saved": false,
        "mod_reason_title": null,
        "gilded": 0,
        "clicked": false,
        "title": "Watching old family videos.",
        "link_flair_richtext": [],
        "subreddit_name_prefixed": "r/funny",
        "hidden": false,
        "pwls": 6,
        "link_flair_css_class": null,
        "downs": 0,
        "thumbnail_height": 140,
        "hide_score": false,
        "name": "t3_bq6i3l",
        "quarantine": false,
        "link_flair_text_color": "dark",
        "author_flair_background_color": null,
        "subreddit_type": "public",
        "ups": 15206,
        "total_awards_received": 2,
        "media_embed": {},
        "thumbnail_width": 140,
        "author_flair_template_id": null,
        "is_original_content": false,
        "user_reports": [],
        "secure_media": null,
        "is_reddit_media_domain": true,
        "is_meta": false,
        "category": null,
        "secure_media_embed": {},
        "link_flair_text": null,
        "can_mod_post": false,
        "score": 15206,
        "approved_by": null,
        "thumbnail": "https://a.thumbs.redditmedia.com/XiZf918nwlfc0DvBU7AB74CF7x9wqwTqx2NUn2w_pr8.jpg",
        "edited": false,
        "author_flair_css_class": null,
        "author_flair_richtext": [],
        "gildings": {
          "gid_1": 2
        },
        "post_hint": "image",
        "content_categories": null,
        "is_self": false,
        "mod_note": null,
        "created": 1558229440,
        "link_flair_type": "text",
        "wls": 6,
        "banned_by": null,
        "author_flair_type": "text",
        "domain": "i.redd.it",
        "selftext_html": null,
        "likes": null,
        "suggested_sort": null,
        "banned_at_utc": null,
        "view_count": null,
        "archived": false,
        "no_follow": false,
        "is_crosspostable": false,
        "pinned": false,
        "over_18": false,
        "preview": {
          "images": [
            {
              "source": {
                "url": "https://preview.redd.it/r3auuboz80z21.jpg?auto=webp&amp;s=303f85d845d32cbea4ba7672288137225c89ad67",
                "width": 1440,
                "height": 1769
              },
              "resolutions": [
                {
                  "url": "https://preview.redd.it/r3auuboz80z21.jpg?width=108&amp;crop=smart&amp;auto=webp&amp;s=9400f2c2c9c9bd502410d58670650afde3fa6323",
                  "width": 108,
                  "height": 132
                },
                {
                  "url": "https://preview.redd.it/r3auuboz80z21.jpg?width=216&amp;crop=smart&amp;auto=webp&amp;s=70a7eff001b7ddfc010136e1068a970ce40fd345",
                  "width": 216,
                  "height": 265
                },
                {
                  "url": "https://preview.redd.it/r3auuboz80z21.jpg?width=320&amp;crop=smart&amp;auto=webp&amp;s=1e7062ccbe2fa8dd8a914f9c4602ce1afe093994",
                  "width": 320,
                  "height": 393
                },
                {
                  "url": "https://preview.redd.it/r3auuboz80z21.jpg?width=640&amp;crop=smart&amp;auto=webp&amp;s=cb078476c5dcb95712bed5ca66a7587d803eee43",
                  "width": 640,
                  "height": 786
                },
                {
                  "url": "https://preview.redd.it/r3auuboz80z21.jpg?width=960&amp;crop=smart&amp;auto=webp&amp;s=a3b3694b482debbb5ea6166357377464660b8b1b",
                  "width": 960,
                  "height": 1179
                },
                {
                  "url": "https://preview.redd.it/r3auuboz80z21.jpg?width=1080&amp;crop=smart&amp;auto=webp&amp;s=47f4f4fe015a40da40e5d46f9059e2d015bb65f7",
                  "width": 1080,
                  "height": 1326
                }
              ],
              "variants": {},
              "id": "6LSwwnxKvjvaV07IgijUEQjO0R1bjf0k0MRL8EJVirQ"
            }
          ],
          "enabled": true
        },
        "all_awardings": [
          {
            "is_enabled": true,
            "count": 2,
            "subreddit_id": null,
            "description": "Silver Award",
            "coin_reward": 0,
            "icon_width": 512,
            "icon_url": "https://www.redditstatic.com/gold/awards/icon/silver_512.png",
            "days_of_premium": 0,
            "icon_height": 512,
            "resized_icons": [
              {
                "url": "https://www.redditstatic.com/gold/awards/icon/silver_16.png",
                "width": 16,
                "height": 16
              },
              {
                "url": "https://www.redditstatic.com/gold/awards/icon/silver_32.png",
                "width": 32,
                "height": 32
              },
              {
                "url": "https://www.redditstatic.com/gold/awards/icon/silver_48.png",
                "width": 48,
                "height": 48
              },
              {
                "url": "https://www.redditstatic.com/gold/awards/icon/silver_64.png",
                "width": 64,
                "height": 64
              },
              {
                "url": "https://www.redditstatic.com/gold/awards/icon/silver_128.png",
                "width": 128,
                "height": 128
              }
            ],
            "days_of_drip_extension": 0,
            "award_type": "global",
            "coin_price": 100,
            "id": "gid_1",
            "name": "Silver"
          }
        ],
        "media_only": false,
        "can_gild": false,
        "spoiler": false,
        "locked": false,
        "author_flair_text": null,
        "visited": false,
        "num_reports": null,
        "distinguished": null,
        "subreddit_id": "t5_2qh33",
        "mod_reason_by": null,
        "removal_reason": null,
        "link_flair_background_color": "",
        "id": "bq6i3l",
        "is_robot_indexable": true,
        "report_reasons": null,
        "author": "dekokode",
        "num_crossposts": 3,
        "num_comments": 128,
        "send_replies": true,
        "whitelist_status": "all_ads",
        "contest_mode": false,
        "mod_reports": [],
        "author_patreon_flair": false,
        "author_flair_text_color": null,
        "permalink": "/r/funny/comments/bq6i3l/watching_old_family_videos/",
        "parent_whitelist_status": "all_ads",
        "stickied": false,
        "url": "https://i.redd.it/r3auuboz80z21.jpg",
        "subreddit_subscribers": 24501379,
        "created_utc": 1558200640,
        "media": null,
        "is_video": false
      }
    },
    {
      "kind": "t3",
      "data": {
        "approved_at_utc": null,
        "subreddit": "Minecraft",
        "selftext": "",
        "author_fullname": "t2_2uih7es2",
        "saved": false,
        "mod_reason_title": null,
        "gilded": 1,
        "clicked": false,
        "title": "These are the moments we strive for",
        "link_flair_richtext": [],
        "subreddit_name_prefixed": "r/Minecraft",
        "hidden": false,
        "pwls": 6,
        "link_flair_css_class": null,
        "downs": 0,
        "thumbnail_height": 78,
        "hide_score": false,
        "name": "t3_bq75s7",
        "quarantine": false,
        "link_flair_text_color": "dark",
        "author_flair_background_color": null,
        "subreddit_type": "public",
        "ups": 16288,
        "total_awards_received": 1,
        "media_embed": {},
        "thumbnail_width": 140,
        "author_flair_template_id": null,
        "is_original_content": false,
        "user_reports": [],
        "secure_media": {
          "reddit_video": {
            "fallback_url": "https://v.redd.it/sajdqtr4j0z21/DASH_1080?source=fallback",
            "height": 1080,
            "width": 1920,
            "scrubber_media_url": "https://v.redd.it/sajdqtr4j0z21/DASH_96",
            "dash_url": "https://v.redd.it/sajdqtr4j0z21/DASHPlaylist.mpd",
            "duration": 19,
            "hls_url": "https://v.redd.it/sajdqtr4j0z21/HLSPlaylist.m3u8",
            "is_gif": true,
            "transcoding_status": "completed"
          }
        },
        "is_reddit_media_domain": true,
        "is_meta": false,
        "category": null,
        "secure_media_embed": {},
        "link_flair_text": null,
        "can_mod_post": false,
        "score": 16288,
        "approved_by": null,
        "thumbnail": "https://b.thumbs.redditmedia.com/ke2EmKIud9QoyVRRPDldRNYRAyAfV6XLbUZT1IvsJmY.jpg",
        "edited": false,
        "author_flair_css_class": null,
        "author_flair_richtext": [],
        "gildings": {
          "gid_2": 1
        },
        "post_hint": "hosted:video",
        "content_categories": null,
        "is_self": false,
        "mod_note": null,
        "created": 1558233027,
        "link_flair_type": "text",
        "wls": 6,
        "banned_by": null,
        "author_flair_type": "text",
        "domain": "v.redd.it",
        "selftext_html": null,
        "likes": null,
        "suggested_sort": null,
        "banned_at_utc": null,
        "view_count": null,
        "archived": false,
        "no_follow": false,
        "is_crosspostable": false,
        "pinned": false,
        "over_18": false,
        "preview": {
          "images": [
            {
              "source": {
                "url": "https://external-preview.redd.it/oL8JkxPZI3Z-LUaT4mgI9Wf2mkce7NJ8hlSbjPHYqT8.png?format=pjpg&amp;auto=webp&amp;s=62b52d97537960b594cfdab5bfbccb97fc2f879d",
                "width": 1920,
                "height": 1080
              },
              "resolutions": [
                {
                  "url": "https://external-preview.redd.it/oL8JkxPZI3Z-LUaT4mgI9Wf2mkce7NJ8hlSbjPHYqT8.png?width=108&amp;crop=smart&amp;format=pjpg&amp;auto=webp&amp;s=db68900d737f9007de3f8c8a58dca3a9dff17113",
                  "width": 108,
                  "height": 60
                },
                {
                  "url": "https://external-preview.redd.it/oL8JkxPZI3Z-LUaT4mgI9Wf2mkce7NJ8hlSbjPHYqT8.png?width=216&amp;crop=smart&amp;format=pjpg&amp;auto=webp&amp;s=86b6c8d71ec492ee34a27ad9290d895679ddc57a",
                  "width": 216,
                  "height": 121
                },
                {
                  "url": "https://external-preview.redd.it/oL8JkxPZI3Z-LUaT4mgI9Wf2mkce7NJ8hlSbjPHYqT8.png?width=320&amp;crop=smart&amp;format=pjpg&amp;auto=webp&amp;s=138c6b80c6ebe18aab11a00130d172a5ad86b3ab",
                  "width": 320,
                  "height": 180
                },
                {
                  "url": "https://external-preview.redd.it/oL8JkxPZI3Z-LUaT4mgI9Wf2mkce7NJ8hlSbjPHYqT8.png?width=640&amp;crop=smart&amp;format=pjpg&amp;auto=webp&amp;s=2c6d991c4b789b7a1c8af661fcc5b4acd7f9b21f",
                  "width": 640,
                  "height": 360
                },
                {
                  "url": "https://external-preview.redd.it/oL8JkxPZI3Z-LUaT4mgI9Wf2mkce7NJ8hlSbjPHYqT8.png?width=960&amp;crop=smart&amp;format=pjpg&amp;auto=webp&amp;s=9c7dad12544224a7e3dcc8be3901d073cb770afd",
                  "width": 960,
                  "height": 540
                },
                {
                  "url": "https://external-preview.redd.it/oL8JkxPZI3Z-LUaT4mgI9Wf2mkce7NJ8hlSbjPHYqT8.png?width=1080&amp;crop=smart&amp;format=pjpg&amp;auto=webp&amp;s=8bfa3745334b3e6b5b899faeda355fcf1ceadc59",
                  "width": 1080,
                  "height": 607
                }
              ],
              "variants": {},
              "id": "m0SSi3elpBxmg3fFsY_khufmg_outPmTaKthakchRhg"
            }
          ],
          "enabled": false
        },
        "all_awardings": [
          {
            "is_enabled": true,
            "count": 1,
            "subreddit_id": null,
            "description": "Gold Award",
            "coin_reward": 100,
            "icon_width": 512,
            "icon_url": "https://www.redditstatic.com/gold/awards/icon/gold_512.png",
            "days_of_premium": 7,
            "icon_height": 512,
            "resized_icons": [
              {
                "url": "https://www.redditstatic.com/gold/awards/icon/gold_16.png",
                "width": 16,
                "height": 16
              },
              {
                "url": "https://www.redditstatic.com/gold/awards/icon/gold_32.png",
                "width": 32,
                "height": 32
              },
              {
                "url": "https://www.redditstatic.com/gold/awards/icon/gold_48.png",
                "width": 48,
                "height": 48
              },
              {
                "url": "https://www.redditstatic.com/gold/awards/icon/gold_64.png",
                "width": 64,
                "height": 64
              },
              {
                "url": "https://www.redditstatic.com/gold/awards/icon/gold_128.png",
                "width": 128,
                "height": 128
              }
            ],
            "days_of_drip_extension": 0,
            "award_type": "global",
            "coin_price": 500,
            "id": "gid_2",
            "name": "Gold"
          }
        ],
        "media_only": false,
        "can_gild": false,
        "spoiler": false,
        "locked": false,
        "author_flair_text": null,
        "visited": false,
        "num_reports": null,
        "distinguished": null,
        "subreddit_id": "t5_2r05i",
        "mod_reason_by": null,
        "removal_reason": null,
        "link_flair_background_color": "",
        "id": "bq75s7",
        "is_robot_indexable": true,
        "report_reasons": null,
        "author": "endexe",
        "num_crossposts": 2,
        "num_comments": 187,
        "send_replies": true,
        "whitelist_status": "all_ads",
        "contest_mode": false,
        "mod_reports": [],
        "author_patreon_flair": false,
        "author_flair_text_color": null,
        "permalink": "/r/Minecraft/comments/bq75s7/these_are_the_moments_we_strive_for/",
        "parent_whitelist_status": "all_ads",
        "stickied": false,
        "url": "https://v.redd.it/sajdqtr4j0z21",
        "subreddit_subscribers": 1199357,
        "created_utc": 1558204227,
        "media": {
          "reddit_video": {
            "fallback_url": "https://v.redd.it/sajdqtr4j0z21/DASH_1080?source=fallback",
            "height": 1080,
            "width": 1920,
            "scrubber_media_url": "https://v.redd.it/sajdqtr4j0z21/DASH_96",
            "dash_url": "https://v.redd.it/sajdqtr4j0z21/DASHPlaylist.mpd",
            "duration": 19,
            "hls_url": "https://v.redd.it/sajdqtr4j0z21/HLSPlaylist.m3u8",
            "is_gif": true,
            "transcoding_status": "completed"
          }
        },
        "is_video": true
      }
    },
    {
      "kind": "t3",
      "data": {
        "approved_at_utc": null,
        "subreddit": "politics",
        "selftext": "",
        "author_fullname": "t2_xqx7074",
        "saved": false,
        "mod_reason_title": null,
        "gilded": 0,
        "clicked": false,
        "title": "Dozens of graduates walk out in protest of Pence address",
        "link_flair_richtext": [],
        "subreddit_name_prefixed": "r/politics",
        "hidden": false,
        "pwls": 6,
        "link_flair_css_class": null,
        "downs": 0,
        "thumbnail_height": 78,
        "hide_score": false,
        "name": "t3_bq5t4m",
        "quarantine": false,
        "link_flair_text_color": "dark",
        "author_flair_background_color": "",
        "subreddit_type": "public",
        "ups": 16639,
        "total_awards_received": 0,
        "media_embed": {},
        "thumbnail_width": 140,
        "author_flair_template_id": "7be44c6e-be39-11e6-b398-0eae18c336b8",
        "is_original_content": false,
        "user_reports": [],
        "secure_media": null,
        "is_reddit_media_domain": false,
        "is_meta": false,
        "category": null,
        "secure_media_embed": {},
        "link_flair_text": null,
        "can_mod_post": false,
        "score": 16639,
        "approved_by": null,
        "thumbnail": "https://b.thumbs.redditmedia.com/v_LyUeFmFMThnWmpBI5E8_ouEDC-4MizgBoeB275xeA.jpg",
        "edited": false,
        "author_flair_css_class": "us-flag",
        "author_flair_richtext": [
          {
            "a": ":flag-us:",
            "e": "emoji",
            "u": "https://emoji.redditmedia.com/zerruivm2ye11_t5_2cneq/flag-us"
          },
          {
            "e": "text",
            "t": " America"
          }
        ],
        "gildings": {},
        "post_hint": "link",
        "content_categories": null,
        "is_self": false,
        "mod_note": null,
        "created": 1558225587,
        "link_flair_type": "text",
        "wls": 6,
        "banned_by": null,
        "author_flair_type": "richtext",
        "domain": "thehill.com",
        "selftext_html": null,
        "likes": null,
        "suggested_sort": null,
        "banned_at_utc": null,
        "view_count": null,
        "archived": false,
        "no_follow": false,
        "is_crosspostable": false,
        "pinned": false,
        "over_18": false,
        "preview": {
          "images": [
            {
              "source": {
                "url": "https://external-preview.redd.it/pfJ010ggXlgWr7OO6pkjJpJawiRS0nPo-nOcyvmn3Ww.jpg?auto=webp&amp;s=a8ecfce360dafd91e3228d6143c7a2ccd13c6a8d",
                "width": 980,
                "height": 551
              },
              "resolutions": [
                {
                  "url": "https://external-preview.redd.it/pfJ010ggXlgWr7OO6pkjJpJawiRS0nPo-nOcyvmn3Ww.jpg?width=108&amp;crop=smart&amp;auto=webp&amp;s=43f3e82da5e1e1eb30d46a641327aafa4e9904ea",
                  "width": 108,
                  "height": 60
                },
                {
                  "url": "https://external-preview.redd.it/pfJ010ggXlgWr7OO6pkjJpJawiRS0nPo-nOcyvmn3Ww.jpg?width=216&amp;crop=smart&amp;auto=webp&amp;s=7db2d82719f2e0ad33e01708c266daafc19a08ba",
                  "width": 216,
                  "height": 121
                },
                {
                  "url": "https://external-preview.redd.it/pfJ010ggXlgWr7OO6pkjJpJawiRS0nPo-nOcyvmn3Ww.jpg?width=320&amp;crop=smart&amp;auto=webp&amp;s=ad6d9731ca7057853345175a53b73e35566f7f36",
                  "width": 320,
                  "height": 179
                },
                {
                  "url": "https://external-preview.redd.it/pfJ010ggXlgWr7OO6pkjJpJawiRS0nPo-nOcyvmn3Ww.jpg?width=640&amp;crop=smart&amp;auto=webp&amp;s=5aa9377578b4c3903af3b639c8fc5df49642c9ea",
                  "width": 640,
                  "height": 359
                },
                {
                  "url": "https://external-preview.redd.it/pfJ010ggXlgWr7OO6pkjJpJawiRS0nPo-nOcyvmn3Ww.jpg?width=960&amp;crop=smart&amp;auto=webp&amp;s=6410cdc9349e6ae11d7293db63b22b15b3f9ec77",
                  "width": 960,
                  "height": 539
                }
              ],
              "variants": {},
              "id": "abKNW9kuTu_e-crIy_wufNM4DXUCze2ZYJd9x2EQkOU"
            }
          ],
          "enabled": false
        },
        "all_awardings": [],
        "media_only": false,
        "can_gild": false,
        "spoiler": false,
        "locked": false,
        "author_flair_text": ":flag-us: America",
        "visited": false,
        "num_reports": null,
        "distinguished": null,
        "subreddit_id": "t5_2cneq",
        "mod_reason_by": null,
        "removal_reason": null,
        "link_flair_background_color": "",
        "id": "bq5t4m",
        "is_robot_indexable": true,
        "report_reasons": null,
        "author": "corginamedzelda",
        "num_crossposts": 3,
        "num_comments": 1405,
        "send_replies": true,
        "whitelist_status": "all_ads",
        "contest_mode": false,
        "mod_reports": [],
        "author_patreon_flair": false,
        "author_flair_text_color": "dark",
        "permalink": "/r/politics/comments/bq5t4m/dozens_of_graduates_walk_out_in_protest_of_pence/",
        "parent_whitelist_status": "all_ads",
        "stickied": false,
        "url": "https://thehill.com/homenews/administration/444396-graduates-walk-out-in-protest-of-pence-commencement-address",
        "subreddit_subscribers": 5081657,
        "created_utc": 1558196787,
        "media": null,
        "is_video": false
      }
    },
    {
      "kind": "t3",
      "data": {
        "approved_at_utc": null,
        "subreddit": "KenM",
        "selftext": "",
        "author_fullname": "t2_dyqzr",
        "saved": false,
        "mod_reason_title": null,
        "gilded": 0,
        "clicked": false,
        "title": "KenM on celebrities.",
        "link_flair_richtext": [],
        "subreddit_name_prefixed": "r/KenM",
        "hidden": false,
        "pwls": 6,
        "link_flair_css_class": null,
        "downs": 0,
        "thumbnail_height": 140,
        "hide_score": false,
        "name": "t3_bq6dkn",
        "quarantine": false,
        "link_flair_text_color": "dark",
        "author_flair_background_color": null,
        "subreddit_type": "public",
        "ups": 9807,
        "total_awards_received": 0,
        "media_embed": {},
        "thumbnail_width": 140,
        "author_flair_template_id": null,
        "is_original_content": false,
        "user_reports": [],
        "secure_media": null,
        "is_reddit_media_domain": false,
        "is_meta": false,
        "category": null,
        "secure_media_embed": {},
        "link_flair_text": null,
        "can_mod_post": false,
        "score": 9807,
        "approved_by": null,
        "thumbnail": "image",
        "edited": false,
        "author_flair_css_class": null,
        "author_flair_richtext": [],
        "gildings": {},
        "post_hint": "image",
        "content_categories": null,
        "is_self": false,
        "mod_note": null,
        "created": 1558228752,
        "link_flair_type": "text",
        "wls": 6,
        "banned_by": null,
        "author_flair_type": "text",
        "domain": "imgur.com",
        "selftext_html": null,
        "likes": null,
        "suggested_sort": null,
        "banned_at_utc": null,
        "view_count": null,
        "archived": false,
        "no_follow": false,
        "is_crosspostable": false,
        "pinned": false,
        "over_18": false,
        "preview": {
          "images": [
            {
              "source": {
                "url": "https://external-preview.redd.it/g2tt9qdSU45OaJuxRInXxq93FV1owWuSmcRzNteS118.png?auto=webp&amp;s=e7d91c50dd5dd5dd709cf5c581a2b2a162b36022",
                "width": 726,
                "height": 908
              },
              "resolutions": [
                {
                  "url": "https://external-preview.redd.it/g2tt9qdSU45OaJuxRInXxq93FV1owWuSmcRzNteS118.png?width=108&amp;crop=smart&amp;auto=webp&amp;s=e5587645fbb89451945767a0bd812fac7083a915",
                  "width": 108,
                  "height": 135
                },
                {
                  "url": "https://external-preview.redd.it/g2tt9qdSU45OaJuxRInXxq93FV1owWuSmcRzNteS118.png?width=216&amp;crop=smart&amp;auto=webp&amp;s=d23c93b87ffe80905abf63a392f63f43ea68d0d0",
                  "width": 216,
                  "height": 270
                },
                {
                  "url": "https://external-preview.redd.it/g2tt9qdSU45OaJuxRInXxq93FV1owWuSmcRzNteS118.png?width=320&amp;crop=smart&amp;auto=webp&amp;s=2d68746d543838ef12e2a684faedc963a8408f2a",
                  "width": 320,
                  "height": 400
                },
                {
                  "url": "https://external-preview.redd.it/g2tt9qdSU45OaJuxRInXxq93FV1owWuSmcRzNteS118.png?width=640&amp;crop=smart&amp;auto=webp&amp;s=a84bd59db3cad2c1b95b62b07042d638bf00e8a0",
                  "width": 640,
                  "height": 800
                }
              ],
              "variants": {},
              "id": "xyBS0DYi9-Qplh0fqCq_o-CF2ALwA_gHksmCzzqfosc"
            }
          ],
          "enabled": true
        },
        "all_awardings": [],
        "media_only": false,
        "can_gild": false,
        "spoiler": false,
        "locked": false,
        "author_flair_text": null,
        "visited": false,
        "num_reports": null,
        "distinguished": null,
        "subreddit_id": "t5_2wm5v",
        "mod_reason_by": null,
        "removal_reason": null,
        "link_flair_background_color": "",
        "id": "bq6dkn",
        "is_robot_indexable": true,
        "report_reasons": null,
        "author": "willstuh",
        "num_crossposts": 0,
        "num_comments": 84,
        "send_replies": false,
        "whitelist_status": "all_ads",
        "contest_mode": false,
        "mod_reports": [],
        "author_patreon_flair": false,
        "author_flair_text_color": null,
        "permalink": "/r/KenM/comments/bq6dkn/kenm_on_celebrities/",
        "parent_whitelist_status": "all_ads",
        "stickied": false,
        "url": "https://imgur.com/kuojIgr.jpg",
        "subreddit_subscribers": 488289,
        "created_utc": 1558199952,
        "media": null,
        "is_video": false
      }
    },
    {
      "kind": "t3",
      "data": {
        "approved_at_utc": null,
        "subreddit": "gaming",
        "selftext": "",
        "author_fullname": "t2_b5i9b",
        "saved": false,
        "mod_reason_title": null,
        "gilded": 2,
        "clicked": false,
        "title": "I hauled my laptop out to the jungle to do this. Civ6",
        "link_flair_richtext": [],
        "subreddit_name_prefixed": "r/gaming",
        "hidden": false,
        "pwls": 6,
        "link_flair_css_class": null,
        "downs": 0,
        "thumbnail_height": 78,
        "hide_score": false,
        "name": "t3_bq6115",
        "quarantine": false,
        "link_flair_text_color": "dark",
        "author_flair_background_color": null,
        "subreddit_type": "public",
        "ups": 33920,
        "total_awards_received": 3,
        "media_embed": {
          "content": "&lt;iframe class=\"embedly-embed\" src=\"https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fgfycat.com%2Fifr%2Femotionalexaltedguineapig&amp;url=https%3A%2F%2Fgfycat.com%2Femotionalexaltedguineapig&amp;image=https%3A%2F%2Fthumbs.gfycat.com%2FEmotionalExaltedGuineapig-size_restricted.gif&amp;key=ed8fa8699ce04833838e66ce79ba05f1&amp;type=text%2Fhtml&amp;schema=gfycat\" width=\"600\" height=\"338\" scrolling=\"no\" frameborder=\"0\" allow=\"autoplay; fullscreen\" allowfullscreen=\"true\"&gt;&lt;/iframe&gt;",
          "width": 600,
          "scrolling": false,
          "height": 338
        },
        "thumbnail_width": 140,
        "author_flair_template_id": null,
        "is_original_content": false,
        "user_reports": [],
        "secure_media": {
          "type": "gfycat.com",
          "oembed": {
            "provider_url": "https://gfycat.com",
            "description": "Watch Temple of Kukulkan GIF by @bfg451 on Gfycat. Discover more related GIFs on Gfycat",
            "title": "Temple of Kukulkan",
            "type": "video",
            "thumbnail_width": 444,
            "height": 338,
            "width": 600,
            "html": "&lt;iframe class=\"embedly-embed\" src=\"https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fgfycat.com%2Fifr%2Femotionalexaltedguineapig&amp;url=https%3A%2F%2Fgfycat.com%2Femotionalexaltedguineapig&amp;image=https%3A%2F%2Fthumbs.gfycat.com%2FEmotionalExaltedGuineapig-size_restricted.gif&amp;key=ed8fa8699ce04833838e66ce79ba05f1&amp;type=text%2Fhtml&amp;schema=gfycat\" width=\"600\" height=\"338\" scrolling=\"no\" frameborder=\"0\" allow=\"autoplay; fullscreen\" allowfullscreen=\"true\"&gt;&lt;/iframe&gt;",
            "version": "1.0",
            "provider_name": "Gfycat",
            "thumbnail_url": "https://thumbs.gfycat.com/EmotionalExaltedGuineapig-size_restricted.gif",
            "thumbnail_height": 250
          }
        },
        "is_reddit_media_domain": false,
        "is_meta": false,
        "category": null,
        "secure_media_embed": {
          "content": "&lt;iframe class=\"embedly-embed\" src=\"https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fgfycat.com%2Fifr%2Femotionalexaltedguineapig&amp;url=https%3A%2F%2Fgfycat.com%2Femotionalexaltedguineapig&amp;image=https%3A%2F%2Fthumbs.gfycat.com%2FEmotionalExaltedGuineapig-size_restricted.gif&amp;key=ed8fa8699ce04833838e66ce79ba05f1&amp;type=text%2Fhtml&amp;schema=gfycat\" width=\"600\" height=\"338\" scrolling=\"no\" frameborder=\"0\" allow=\"autoplay; fullscreen\" allowfullscreen=\"true\"&gt;&lt;/iframe&gt;",
          "width": 600,
          "scrolling": false,
          "media_domain_url": "https://www.redditmedia.com/mediaembed/bq6115",
          "height": 338
        },
        "link_flair_text": null,
        "can_mod_post": false,
        "score": 33920,
        "approved_by": null,
        "thumbnail": "https://a.thumbs.redditmedia.com/vtrqUgVrS5qgaOdAuhvNBOR0AL0APWyeDezkxQSLCw0.jpg",
        "edited": false,
        "author_flair_css_class": null,
        "author_flair_richtext": [],
        "gildings": {
          "gid_1": 1,
          "gid_2": 2
        },
        "post_hint": "rich:video",
        "content_categories": null,
        "is_self": false,
        "mod_note": null,
        "created": 1558226825,
        "link_flair_type": "text",
        "wls": 6,
        "banned_by": null,
        "author_flair_type": "text",
        "domain": "gfycat.com",
        "selftext_html": null,
        "likes": null,
        "suggested_sort": null,
        "banned_at_utc": null,
        "view_count": null,
        "archived": false,
        "no_follow": false,
        "is_crosspostable": false,
        "pinned": false,
        "over_18": false,
        "preview": {
          "images": [
            {
              "source": {
                "url": "https://external-preview.redd.it/kx-eHsGr-O_blh_gcm-bJITwVMyxGoGoAJNK_cQijiE.gif?format=png8&amp;s=8336fb83b3073dd8e4aed5d8623ee68995d43308",
                "width": 444,
                "height": 250
              },
              "resolutions": [
                {
                  "url": "https://external-preview.redd.it/kx-eHsGr-O_blh_gcm-bJITwVMyxGoGoAJNK_cQijiE.gif?width=108&amp;crop=smart&amp;format=png8&amp;s=c47e97c5b7cef5bf1a7f0812a41dafbfcccb64ac",
                  "width": 108,
                  "height": 60
                },
                {
                  "url": "https://external-preview.redd.it/kx-eHsGr-O_blh_gcm-bJITwVMyxGoGoAJNK_cQijiE.gif?width=216&amp;crop=smart&amp;format=png8&amp;s=048c464337a161cb75b88f4aef25c54b0e37da71",
                  "width": 216,
                  "height": 121
                },
                {
                  "url": "https://external-preview.redd.it/kx-eHsGr-O_blh_gcm-bJITwVMyxGoGoAJNK_cQijiE.gif?width=320&amp;crop=smart&amp;format=png8&amp;s=09298800e121d5d430a53dacdc03a7d55336a5a5",
                  "width": 320,
                  "height": 180
                }
              ],
              "variants": {
                "gif": {
                  "source": {
                    "url": "https://external-preview.redd.it/kx-eHsGr-O_blh_gcm-bJITwVMyxGoGoAJNK_cQijiE.gif?s=df224cf37842285e57e3a9ab9fd5651e8c3a346c",
                    "width": 444,
                    "height": 250
                  },
                  "resolutions": [
                    {
                      "url": "https://external-preview.redd.it/kx-eHsGr-O_blh_gcm-bJITwVMyxGoGoAJNK_cQijiE.gif?width=108&amp;crop=smart&amp;s=1206d289774b5fd7e579fae6676ccc065d5775a0",
                      "width": 108,
                      "height": 60
                    },
                    {
                      "url": "https://external-preview.redd.it/kx-eHsGr-O_blh_gcm-bJITwVMyxGoGoAJNK_cQijiE.gif?width=216&amp;crop=smart&amp;s=5acd44cea4b8eb4a6ef07c79413eee5d44045cc1",
                      "width": 216,
                      "height": 121
                    },
                    {
                      "url": "https://external-preview.redd.it/kx-eHsGr-O_blh_gcm-bJITwVMyxGoGoAJNK_cQijiE.gif?width=320&amp;crop=smart&amp;s=8fe94f4f36be92f92d8f7c11ffecb4d12b5f831e",
                      "width": 320,
                      "height": 180
                    }
                  ]
                },
                "mp4": {
                  "source": {
                    "url": "https://external-preview.redd.it/kx-eHsGr-O_blh_gcm-bJITwVMyxGoGoAJNK_cQijiE.gif?format=mp4&amp;s=4a5f8bbbfe324eaae76517a958ad7b3a7c0357a7",
                    "width": 444,
                    "height": 250
                  },
                  "resolutions": [
                    {
                      "url": "https://external-preview.redd.it/kx-eHsGr-O_blh_gcm-bJITwVMyxGoGoAJNK_cQijiE.gif?width=108&amp;format=mp4&amp;s=3d99146f2824f4fbf2e099174602587f47ab4933",
                      "width": 108,
                      "height": 60
                    },
                    {
                      "url": "https://external-preview.redd.it/kx-eHsGr-O_blh_gcm-bJITwVMyxGoGoAJNK_cQijiE.gif?width=216&amp;format=mp4&amp;s=4eda89337f03a59db2356089b39ea8b3d3298c48",
                      "width": 216,
                      "height": 121
                    },
                    {
                      "url": "https://external-preview.redd.it/kx-eHsGr-O_blh_gcm-bJITwVMyxGoGoAJNK_cQijiE.gif?width=320&amp;format=mp4&amp;s=7863aa8c59574dcb784b9a4099b00be6222dfa67",
                      "width": 320,
                      "height": 180
                    }
                  ]
                }
              },
              "id": "CKXtcc6mrM82UGYE397txRkPUVgmSeC3D3GztEsOwGM"
            }
          ],
          "reddit_video_preview": {
            "fallback_url": "https://v.redd.it/t5wp3iqw51z21/DASH_360",
            "height": 360,
            "width": 640,
            "scrubber_media_url": "https://v.redd.it/t5wp3iqw51z21/DASH_96",
            "dash_url": "https://v.redd.it/t5wp3iqw51z21/DASHPlaylist.mpd",
            "duration": 23,
            "hls_url": "https://v.redd.it/t5wp3iqw51z21/HLSPlaylist.m3u8",
            "is_gif": true,
            "transcoding_status": "completed"
          },
          "enabled": true
        },
        "all_awardings": [
          {
            "is_enabled": true,
            "count": 2,
            "subreddit_id": null,
            "description": "Gold Award",
            "coin_reward": 100,
            "icon_width": 512,
            "icon_url": "https://www.redditstatic.com/gold/awards/icon/gold_512.png",
            "days_of_premium": 7,
            "icon_height": 512,
            "resized_icons": [
              {
                "url": "https://www.redditstatic.com/gold/awards/icon/gold_16.png",
                "width": 16,
                "height": 16
              },
              {
                "url": "https://www.redditstatic.com/gold/awards/icon/gold_32.png",
                "width": 32,
                "height": 32
              },
              {
                "url": "https://www.redditstatic.com/gold/awards/icon/gold_48.png",
                "width": 48,
                "height": 48
              },
              {
                "url": "https://www.redditstatic.com/gold/awards/icon/gold_64.png",
                "width": 64,
                "height": 64
              },
              {
                "url": "https://www.redditstatic.com/gold/awards/icon/gold_128.png",
                "width": 128,
                "height": 128
              }
            ],
            "days_of_drip_extension": 0,
            "award_type": "global",
            "coin_price": 500,
            "id": "gid_2",
            "name": "Gold"
          },
          {
            "is_enabled": true,
            "count": 1,
            "subreddit_id": null,
            "description": "Silver Award",
            "coin_reward": 0,
            "icon_width": 512,
            "icon_url": "https://www.redditstatic.com/gold/awards/icon/silver_512.png",
            "days_of_premium": 0,
            "icon_height": 512,
            "resized_icons": [
              {
                "url": "https://www.redditstatic.com/gold/awards/icon/silver_16.png",
                "width": 16,
                "height": 16
              },
              {
                "url": "https://www.redditstatic.com/gold/awards/icon/silver_32.png",
                "width": 32,
                "height": 32
              },
              {
                "url": "https://www.redditstatic.com/gold/awards/icon/silver_48.png",
                "width": 48,
                "height": 48
              },
              {
                "url": "https://www.redditstatic.com/gold/awards/icon/silver_64.png",
                "width": 64,
                "height": 64
              },
              {
                "url": "https://www.redditstatic.com/gold/awards/icon/silver_128.png",
                "width": 128,
                "height": 128
              }
            ],
            "days_of_drip_extension": 0,
            "award_type": "global",
            "coin_price": 100,
            "id": "gid_1",
            "name": "Silver"
          }
        ],
        "media_only": false,
        "can_gild": false,
        "spoiler": false,
        "locked": false,
        "author_flair_text": null,
        "visited": false,
        "num_reports": null,
        "distinguished": null,
        "subreddit_id": "t5_2qh03",
        "mod_reason_by": null,
        "removal_reason": null,
        "link_flair_background_color": "",
        "id": "bq6115",
        "is_robot_indexable": true,
        "report_reasons": null,
        "author": "not_today_trebeck",
        "num_crossposts": 6,
        "num_comments": 521,
        "send_replies": true,
        "whitelist_status": "all_ads",
        "contest_mode": false,
        "mod_reports": [],
        "author_patreon_flair": false,
        "author_flair_text_color": null,
        "permalink": "/r/gaming/comments/bq6115/i_hauled_my_laptop_out_to_the_jungle_to_do_this/",
        "parent_whitelist_status": "all_ads",
        "stickied": false,
        "url": "https://gfycat.com/EmotionalExaltedGuineapig",
        "subreddit_subscribers": 22180787,
        "created_utc": 1558198025,
        "media": {
          "type": "gfycat.com",
          "oembed": {
            "provider_url": "https://gfycat.com",
            "description": "Watch Temple of Kukulkan GIF by @bfg451 on Gfycat. Discover more related GIFs on Gfycat",
            "title": "Temple of Kukulkan",
            "type": "video",
            "thumbnail_width": 444,
            "height": 338,
            "width": 600,
            "html": "&lt;iframe class=\"embedly-embed\" src=\"https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fgfycat.com%2Fifr%2Femotionalexaltedguineapig&amp;url=https%3A%2F%2Fgfycat.com%2Femotionalexaltedguineapig&amp;image=https%3A%2F%2Fthumbs.gfycat.com%2FEmotionalExaltedGuineapig-size_restricted.gif&amp;key=ed8fa8699ce04833838e66ce79ba05f1&amp;type=text%2Fhtml&amp;schema=gfycat\" width=\"600\" height=\"338\" scrolling=\"no\" frameborder=\"0\" allow=\"autoplay; fullscreen\" allowfullscreen=\"true\"&gt;&lt;/iframe&gt;",
            "version": "1.0",
            "provider_name": "Gfycat",
            "thumbnail_url": "https://thumbs.gfycat.com/EmotionalExaltedGuineapig-size_restricted.gif",
            "thumbnail_height": 250
          }
        },
        "is_video": false
      }
    },
    {
      "kind": "t3",
      "data": {
        "approved_at_utc": null,
        "subreddit": "PrequelMemes",
        "selftext": "",
        "author_fullname": "t2_1okk0xnu",
        "saved": false,
        "mod_reason_title": null,
        "gilded": 0,
        "clicked": false,
        "title": "Everyday more rain",
        "link_flair_richtext": [],
        "subreddit_name_prefixed": "r/PrequelMemes",
        "hidden": false,
        "pwls": 6,
        "link_flair_css_class": null,
        "downs": 0,
        "thumbnail_height": 128,
        "hide_score": false,
        "name": "t3_bq6mm8",
        "quarantine": false,
        "link_flair_text_color": "dark",
        "author_flair_background_color": null,
        "subreddit_type": "public",
        "ups": 14537,
        "total_awards_received": 0,
        "media_embed": {},
        "thumbnail_width": 140,
        "author_flair_template_id": null,
        "is_original_content": false,
        "user_reports": [],
        "secure_media": null,
        "is_reddit_media_domain": true,
        "is_meta": false,
        "category": null,
        "secure_media_embed": {},
        "link_flair_text": null,
        "can_mod_post": false,
        "score": 14537,
        "approved_by": null,
        "thumbnail": "https://a.thumbs.redditmedia.com/T_Wi8DITPcDzc9eSEI2irAj6FTaw2tE8VyrTxnG73M8.jpg",
        "edited": false,
        "author_flair_css_class": null,
        "author_flair_richtext": [],
        "gildings": {},
        "post_hint": "image",
        "content_categories": null,
        "is_self": false,
        "mod_note": null,
        "created": 1558230128,
        "link_flair_type": "text",
        "wls": 6,
        "banned_by": null,
        "author_flair_type": "text",
        "domain": "i.redd.it",
        "selftext_html": null,
        "likes": null,
        "suggested_sort": null,
        "banned_at_utc": null,
        "view_count": null,
        "archived": false,
        "no_follow": false,
        "is_crosspostable": false,
        "pinned": false,
        "over_18": false,
        "preview": {
          "images": [
            {
              "source": {
                "url": "https://preview.redd.it/o7vlluh1b0z21.jpg?auto=webp&amp;s=fdda2148b0fd0d76d28601af758dbdfab8887b60",
                "width": 1080,
                "height": 992
              },
              "resolutions": [
                {
                  "url": "https://preview.redd.it/o7vlluh1b0z21.jpg?width=108&amp;crop=smart&amp;auto=webp&amp;s=d1916cda477f6567b0cb0adfd7d7fced892a9042",
                  "width": 108,
                  "height": 99
                },
                {
                  "url": "https://preview.redd.it/o7vlluh1b0z21.jpg?width=216&amp;crop=smart&amp;auto=webp&amp;s=b11e5f0f742de0f9d2b3068aac306192ff3e4120",
                  "width": 216,
                  "height": 198
                },
                {
                  "url": "https://preview.redd.it/o7vlluh1b0z21.jpg?width=320&amp;crop=smart&amp;auto=webp&amp;s=c69420c35a729b8f88cd0ffe40c79269802c1297",
                  "width": 320,
                  "height": 293
                },
                {
                  "url": "https://preview.redd.it/o7vlluh1b0z21.jpg?width=640&amp;crop=smart&amp;auto=webp&amp;s=c86bd28b54a1f31c2fe3e36418e31ae4c107d87e",
                  "width": 640,
                  "height": 587
                },
                {
                  "url": "https://preview.redd.it/o7vlluh1b0z21.jpg?width=960&amp;crop=smart&amp;auto=webp&amp;s=07696c0530dbb5c6a2f1d628ff78bddd492c093e",
                  "width": 960,
                  "height": 881
                },
                {
                  "url": "https://preview.redd.it/o7vlluh1b0z21.jpg?width=1080&amp;crop=smart&amp;auto=webp&amp;s=f6f137ae8c844754e9b1cc96fdccd9e4078f2264",
                  "width": 1080,
                  "height": 992
                }
              ],
              "variants": {},
              "id": "uhybodI94-ip0LIM6f9VZzp2y8zYAHRCYTk__9B_GkA"
            }
          ],
          "enabled": true
        },
        "all_awardings": [],
        "media_only": false,
        "can_gild": false,
        "spoiler": false,
        "locked": false,
        "author_flair_text": null,
        "visited": false,
        "num_reports": null,
        "distinguished": null,
        "subreddit_id": "t5_3i60n",
        "mod_reason_by": null,
        "removal_reason": null,
        "link_flair_background_color": "",
        "id": "bq6mm8",
        "is_robot_indexable": true,
        "report_reasons": null,
        "author": "RogerRoger420",
        "num_crossposts": 1,
        "num_comments": 88,
        "send_replies": true,
        "whitelist_status": "all_ads",
        "contest_mode": false,
        "mod_reports": [],
        "author_patreon_flair": false,
        "author_flair_text_color": null,
        "permalink": "/r/PrequelMemes/comments/bq6mm8/everyday_more_rain/",
        "parent_whitelist_status": "all_ads",
        "stickied": false,
        "url": "https://i.redd.it/o7vlluh1b0z21.jpg",
        "subreddit_subscribers": 953886,
        "created_utc": 1558201328,
        "media": null,
        "is_video": false
      }
    },
    {
      "kind": "t3",
      "data": {
        "approved_at_utc": null,
        "subreddit": "dankmemes",
        "selftext": "",
        "author_fullname": "t2_1l516inq",
        "saved": false,
        "mod_reason_title": null,
        "gilded": 1,
        "clicked": false,
        "title": "oh god",
        "link_flair_richtext": [],
        "subreddit_name_prefixed": "r/dankmemes",
        "hidden": false,
        "pwls": 6,
        "link_flair_css_class": null,
        "downs": 0,
        "thumbnail_height": 122,
        "hide_score": false,
        "name": "t3_bq5vcb",
        "quarantine": false,
        "link_flair_text_color": "dark",
        "author_flair_background_color": "",
        "subreddit_type": "public",
        "ups": 44801,
        "total_awards_received": 5,
        "media_embed": {},
        "thumbnail_width": 140,
        "author_flair_template_id": "e7de16a4-ac3f-11e6-b248-0e02d7c351aa",
        "is_original_content": false,
        "user_reports": [],
        "secure_media": null,
        "is_reddit_media_domain": true,
        "is_meta": false,
        "category": null,
        "secure_media_embed": {},
        "link_flair_text": null,
        "can_mod_post": false,
        "score": 44801,
        "approved_by": null,
        "thumbnail": "https://b.thumbs.redditmedia.com/QXeXFexROoidrvh8Rus4vrXIVNGCKGI0moIc7qpHQhs.jpg",
        "edited": false,
        "author_flair_css_class": "text",
        "author_flair_richtext": [],
        "gildings": {
          "gid_1": 4,
          "gid_2": 1
        },
        "post_hint": "image",
        "content_categories": null,
        "is_self": false,
        "mod_note": null,
        "created": 1558225926,
        "link_flair_type": "text",
        "wls": 6,
        "banned_by": null,
        "author_flair_type": "text",
        "domain": "i.redd.it",
        "selftext_html": null,
        "likes": null,
        "suggested_sort": "top",
        "banned_at_utc": null,
        "view_count": null,
        "archived": false,
        "no_follow": false,
        "is_crosspostable": false,
        "pinned": false,
        "over_18": false,
        "preview": {
          "images": [
            {
              "source": {
                "url": "https://preview.redd.it/bsmk0ehmxzy21.jpg?auto=webp&amp;s=47fcc140e024a58b760d3a274830949d4235bb9a",
                "width": 493,
                "height": 430
              },
              "resolutions": [
                {
                  "url": "https://preview.redd.it/bsmk0ehmxzy21.jpg?width=108&amp;crop=smart&amp;auto=webp&amp;s=7ee28542d14092d10cf902b6c71e527443428c3b",
                  "width": 108,
                  "height": 94
                },
                {
                  "url": "https://preview.redd.it/bsmk0ehmxzy21.jpg?width=216&amp;crop=smart&amp;auto=webp&amp;s=ee63bc14b05018246d789e09aebfdf58408162b8",
                  "width": 216,
                  "height": 188
                },
                {
                  "url": "https://preview.redd.it/bsmk0ehmxzy21.jpg?width=320&amp;crop=smart&amp;auto=webp&amp;s=fcb314c9742cc4fc4a2b10f481303506548b762a",
                  "width": 320,
                  "height": 279
                }
              ],
              "variants": {},
              "id": "bUs8qr5lAaHRzW-1A_STKdqZA0HP0rm69Sx-5_XwXC8"
            }
          ],
          "enabled": true
        },
        "all_awardings": [
          {
            "is_enabled": true,
            "count": 1,
            "subreddit_id": null,
            "description": "Gold Award",
            "coin_reward": 100,
            "icon_width": 512,
            "icon_url": "https://www.redditstatic.com/gold/awards/icon/gold_512.png",
            "days_of_premium": 7,
            "icon_height": 512,
            "resized_icons": [
              {
                "url": "https://www.redditstatic.com/gold/awards/icon/gold_16.png",
                "width": 16,
                "height": 16
              },
              {
                "url": "https://www.redditstatic.com/gold/awards/icon/gold_32.png",
                "width": 32,
                "height": 32
              },
              {
                "url": "https://www.redditstatic.com/gold/awards/icon/gold_48.png",
                "width": 48,
                "height": 48
              },
              {
                "url": "https://www.redditstatic.com/gold/awards/icon/gold_64.png",
                "width": 64,
                "height": 64
              },
              {
                "url": "https://www.redditstatic.com/gold/awards/icon/gold_128.png",
                "width": 128,
                "height": 128
              }
            ],
            "days_of_drip_extension": 0,
            "award_type": "global",
            "coin_price": 500,
            "id": "gid_2",
            "name": "Gold"
          },
          {
            "is_enabled": true,
            "count": 4,
            "subreddit_id": null,
            "description": "Silver Award",
            "coin_reward": 0,
            "icon_width": 512,
            "icon_url": "https://www.redditstatic.com/gold/awards/icon/silver_512.png",
            "days_of_premium": 0,
            "icon_height": 512,
            "resized_icons": [
              {
                "url": "https://www.redditstatic.com/gold/awards/icon/silver_16.png",
                "width": 16,
                "height": 16
              },
              {
                "url": "https://www.redditstatic.com/gold/awards/icon/silver_32.png",
                "width": 32,
                "height": 32
              },
              {
                "url": "https://www.redditstatic.com/gold/awards/icon/silver_48.png",
                "width": 48,
                "height": 48
              },
              {
                "url": "https://www.redditstatic.com/gold/awards/icon/silver_64.png",
                "width": 64,
                "height": 64
              },
              {
                "url": "https://www.redditstatic.com/gold/awards/icon/silver_128.png",
                "width": 128,
                "height": 128
              }
            ],
            "days_of_drip_extension": 0,
            "award_type": "global",
            "coin_price": 100,
            "id": "gid_1",
            "name": "Silver"
          }
        ],
        "media_only": false,
        "can_gild": false,
        "spoiler": false,
        "locked": false,
        "author_flair_text": "OC Memer",
        "visited": false,
        "num_reports": null,
        "distinguished": null,
        "subreddit_id": "t5_2zmfe",
        "mod_reason_by": null,
        "removal_reason": null,
        "link_flair_background_color": "",
        "id": "bq5vcb",
        "is_robot_indexable": true,
        "report_reasons": null,
        "author": "Dirty-Dan24",
        "num_crossposts": 7,
        "num_comments": 354,
        "send_replies": true,
        "whitelist_status": "all_ads",
        "contest_mode": false,
        "mod_reports": [],
        "author_patreon_flair": false,
        "author_flair_text_color": "dark",
        "permalink": "/r/dankmemes/comments/bq5vcb/oh_god/",
        "parent_whitelist_status": "all_ads",
        "stickied": false,
        "url": "https://i.redd.it/bsmk0ehmxzy21.jpg",
        "subreddit_subscribers": 2274331,
        "created_utc": 1558197126,
        "media": null,
        "is_video": false
      }
    },
    {
      "kind": "t3",
      "data": {
        "approved_at_utc": null,
        "subreddit": "interestingasfuck",
        "selftext": "",
        "author_fullname": "t2_o6gle",
        "saved": false,
        "mod_reason_title": null,
        "gilded": 1,
        "clicked": false,
        "title": "This dog does street performances with its owner",
        "link_flair_richtext": [],
        "subreddit_name_prefixed": "r/interestingasfuck",
        "hidden": false,
        "pwls": 6,
        "link_flair_css_class": "approve",
        "downs": 0,
        "thumbnail_height": 140,
        "hide_score": false,
        "name": "t3_bq5l83",
        "quarantine": false,
        "link_flair_text_color": "dark",
        "author_flair_background_color": null,
        "subreddit_type": "public",
        "ups": 41875,
        "total_awards_received": 1,
        "media_embed": {
          "content": "&lt;iframe class=\"embedly-embed\" src=\"https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fgfycat.com%2Fifr%2Funfortunateconstantdrake&amp;url=https%3A%2F%2Fgfycat.com%2Funfortunateconstantdrake&amp;image=https%3A%2F%2Fthumbs.gfycat.com%2FUnfortunateConstantDrake-size_restricted.gif&amp;key=2aa3c4d5f3de4f5b9120b660ad850dc9&amp;type=text%2Fhtml&amp;schema=gfycat\" width=\"600\" height=\"1067\" scrolling=\"no\" frameborder=\"0\" allow=\"autoplay; fullscreen\" allowfullscreen=\"true\"&gt;&lt;/iframe&gt;",
          "width": 600,
          "scrolling": false,
          "height": 1067
        },
        "thumbnail_width": 140,
        "author_flair_template_id": null,
        "is_original_content": false,
        "user_reports": [],
        "secure_media": {
          "type": "gfycat.com",
          "oembed": {
            "provider_url": "https://gfycat.com",
            "description": "Watch This dog does street performances with his owner GIF by gangbangkang (@gangbangkang) on Gfycat. Discover more related GIFs on Gfycat",
            "title": "This dog does street performances with his owner",
            "type": "video",
            "thumbnail_width": 250,
            "height": 1067,
            "width": 600,
            "html": "&lt;iframe class=\"embedly-embed\" src=\"https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fgfycat.com%2Fifr%2Funfortunateconstantdrake&amp;url=https%3A%2F%2Fgfycat.com%2Funfortunateconstantdrake&amp;image=https%3A%2F%2Fthumbs.gfycat.com%2FUnfortunateConstantDrake-size_restricted.gif&amp;key=2aa3c4d5f3de4f5b9120b660ad850dc9&amp;type=text%2Fhtml&amp;schema=gfycat\" width=\"600\" height=\"1067\" scrolling=\"no\" frameborder=\"0\" allow=\"autoplay; fullscreen\" allowfullscreen=\"true\"&gt;&lt;/iframe&gt;",
            "version": "1.0",
            "provider_name": "Gfycat",
            "thumbnail_url": "https://thumbs.gfycat.com/UnfortunateConstantDrake-size_restricted.gif",
            "thumbnail_height": 444
          }
        },
        "is_reddit_media_domain": false,
        "is_meta": false,
        "category": null,
        "secure_media_embed": {
          "content": "&lt;iframe class=\"embedly-embed\" src=\"https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fgfycat.com%2Fifr%2Funfortunateconstantdrake&amp;url=https%3A%2F%2Fgfycat.com%2Funfortunateconstantdrake&amp;image=https%3A%2F%2Fthumbs.gfycat.com%2FUnfortunateConstantDrake-size_restricted.gif&amp;key=2aa3c4d5f3de4f5b9120b660ad850dc9&amp;type=text%2Fhtml&amp;schema=gfycat\" width=\"600\" height=\"1067\" scrolling=\"no\" frameborder=\"0\" allow=\"autoplay; fullscreen\" allowfullscreen=\"true\"&gt;&lt;/iframe&gt;",
          "width": 600,
          "scrolling": false,
          "media_domain_url": "https://www.redditmedia.com/mediaembed/bq5l83",
          "height": 1067
        },
        "link_flair_text": "/r/ALL",
        "can_mod_post": false,
        "score": 41875,
        "approved_by": null,
        "thumbnail": "https://b.thumbs.redditmedia.com/dpZkcVrFp38Sks2HAbbWCS6OQd4avxT-pVjJOlaIM0w.jpg",
        "edited": false,
        "author_flair_css_class": null,
        "author_flair_richtext": [],
        "gildings": {
          "gid_2": 1
        },
        "post_hint": "rich:video",
        "content_categories": null,
        "is_self": false,
        "mod_note": null,
        "created": 1558224358,
        "link_flair_type": "text",
        "wls": 6,
        "banned_by": null,
        "author_flair_type": "text",
        "domain": "gfycat.com",
        "selftext_html": null,
        "likes": null,
        "suggested_sort": null,
        "banned_at_utc": null,
        "view_count": null,
        "archived": false,
        "no_follow": false,
        "is_crosspostable": false,
        "pinned": false,
        "over_18": false,
        "preview": {
          "images": [
            {
              "source": {
                "url": "https://external-preview.redd.it/ROV6Yq9K1pTzJwhOt6qUqs7_28pIphyBoVEy3Gg-A0o.jpg?auto=webp&amp;s=9cc05b14cb09e4bb125b82c69e1ba4cf5dac7a8d",
                "width": 250,
                "height": 444
              },
              "resolutions": [
                {
                  "url": "https://external-preview.redd.it/ROV6Yq9K1pTzJwhOt6qUqs7_28pIphyBoVEy3Gg-A0o.jpg?width=108&amp;crop=smart&amp;auto=webp&amp;s=78e426d4560e3783a0c103e44e241c6c29897873",
                  "width": 108,
                  "height": 191
                },
                {
                  "url": "https://external-preview.redd.it/ROV6Yq9K1pTzJwhOt6qUqs7_28pIphyBoVEy3Gg-A0o.jpg?width=216&amp;crop=smart&amp;auto=webp&amp;s=2183faa85a252275c8307433d5878f49a4d87ce4",
                  "width": 216,
                  "height": 383
                }
              ],
              "variants": {},
              "id": "yDH9pfUp0fyT2oT_p1ZvHruMvnKxgI2-TgXqux663Kc"
            }
          ],
          "reddit_video_preview": {
            "fallback_url": "https://v.redd.it/v2lsxcgjn0z21/DASH_1080",
            "height": 1080,
            "width": 608,
            "scrubber_media_url": "https://v.redd.it/v2lsxcgjn0z21/DASH_96",
            "dash_url": "https://v.redd.it/v2lsxcgjn0z21/DASHPlaylist.mpd",
            "duration": 31,
            "hls_url": "https://v.redd.it/v2lsxcgjn0z21/HLSPlaylist.m3u8",
            "is_gif": true,
            "transcoding_status": "completed"
          },
          "enabled": false
        },
        "all_awardings": [
          {
            "is_enabled": true,
            "count": 1,
            "subreddit_id": null,
            "description": "Gold Award",
            "coin_reward": 100,
            "icon_width": 512,
            "icon_url": "https://www.redditstatic.com/gold/awards/icon/gold_512.png",
            "days_of_premium": 7,
            "icon_height": 512,
            "resized_icons": [
              {
                "url": "https://www.redditstatic.com/gold/awards/icon/gold_16.png",
                "width": 16,
                "height": 16
              },
              {
                "url": "https://www.redditstatic.com/gold/awards/icon/gold_32.png",
                "width": 32,
                "height": 32
              },
              {
                "url": "https://www.redditstatic.com/gold/awards/icon/gold_48.png",
                "width": 48,
                "height": 48
              },
              {
                "url": "https://www.redditstatic.com/gold/awards/icon/gold_64.png",
                "width": 64,
                "height": 64
              },
              {
                "url": "https://www.redditstatic.com/gold/awards/icon/gold_128.png",
                "width": 128,
                "height": 128
              }
            ],
            "days_of_drip_extension": 0,
            "award_type": "global",
            "coin_price": 500,
            "id": "gid_2",
            "name": "Gold"
          }
        ],
        "media_only": false,
        "can_gild": false,
        "spoiler": false,
        "locked": false,
        "author_flair_text": null,
        "visited": false,
        "num_reports": null,
        "distinguished": null,
        "subreddit_id": "t5_2qhsa",
        "mod_reason_by": null,
        "removal_reason": null,
        "link_flair_background_color": "",
        "id": "bq5l83",
        "is_robot_indexable": true,
        "report_reasons": null,
        "author": "gangbangkang",
        "num_crossposts": 26,
        "num_comments": 415,
        "send_replies": true,
        "whitelist_status": "all_ads",
        "contest_mode": false,
        "mod_reports": [],
        "author_patreon_flair": false,
        "author_flair_text_color": null,
        "permalink": "/r/interestingasfuck/comments/bq5l83/this_dog_does_street_performances_with_its_owner/",
        "parent_whitelist_status": "all_ads",
        "stickied": false,
        "url": "https://gfycat.com/UnfortunateConstantDrake",
        "subreddit_subscribers": 3695997,
        "created_utc": 1558195558,
        "media": {
          "type": "gfycat.com",
          "oembed": {
            "provider_url": "https://gfycat.com",
            "description": "Watch This dog does street performances with his owner GIF by gangbangkang (@gangbangkang) on Gfycat. Discover more related GIFs on Gfycat",
            "title": "This dog does street performances with his owner",
            "type": "video",
            "thumbnail_width": 250,
            "height": 1067,
            "width": 600,
            "html": "&lt;iframe class=\"embedly-embed\" src=\"https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fgfycat.com%2Fifr%2Funfortunateconstantdrake&amp;url=https%3A%2F%2Fgfycat.com%2Funfortunateconstantdrake&amp;image=https%3A%2F%2Fthumbs.gfycat.com%2FUnfortunateConstantDrake-size_restricted.gif&amp;key=2aa3c4d5f3de4f5b9120b660ad850dc9&amp;type=text%2Fhtml&amp;schema=gfycat\" width=\"600\" height=\"1067\" scrolling=\"no\" frameborder=\"0\" allow=\"autoplay; fullscreen\" allowfullscreen=\"true\"&gt;&lt;/iframe&gt;",
            "version": "1.0",
            "provider_name": "Gfycat",
            "thumbnail_url": "https://thumbs.gfycat.com/UnfortunateConstantDrake-size_restricted.gif",
            "thumbnail_height": 444
          }
        },
        "is_video": false
      }
    },
    {
      "kind": "t3",
      "data": {
        "approved_at_utc": null,
        "subreddit": "oddlysatisfying",
        "selftext": "",
        "author_fullname": "t2_363exfeq",
        "saved": false,
        "mod_reason_title": null,
        "gilded": 0,
        "clicked": false,
        "title": "Soft Tetris (By C4D4U)",
        "link_flair_richtext": [],
        "subreddit_name_prefixed": "r/oddlysatisfying",
        "hidden": false,
        "pwls": 6,
        "link_flair_css_class": null,
        "downs": 0,
        "thumbnail_height": 78,
        "hide_score": false,
        "name": "t3_bq5s8s",
        "quarantine": false,
        "link_flair_text_color": "dark",
        "author_flair_background_color": null,
        "subreddit_type": "public",
        "ups": 22662,
        "total_awards_received": 0,
        "media_embed": {},
        "thumbnail_width": 140,
        "author_flair_template_id": null,
        "is_original_content": false,
        "user_reports": [],
        "secure_media": {
          "reddit_video": {
            "fallback_url": "https://v.redd.it/4pm6ha60xzy21/DASH_1080?source=fallback",
            "height": 750,
            "width": 1334,
            "scrubber_media_url": "https://v.redd.it/4pm6ha60xzy21/DASH_96",
            "dash_url": "https://v.redd.it/4pm6ha60xzy21/DASHPlaylist.mpd",
            "duration": 57,
            "hls_url": "https://v.redd.it/4pm6ha60xzy21/HLSPlaylist.m3u8",
            "is_gif": true,
            "transcoding_status": "completed"
          }
        },
        "is_reddit_media_domain": true,
        "is_meta": false,
        "category": null,
        "secure_media_embed": {},
        "link_flair_text": null,
        "can_mod_post": false,
        "score": 22662,
        "approved_by": null,
        "thumbnail": "https://b.thumbs.redditmedia.com/ajsYjlUxIAE0IO6RLRGgB3kO_y0NshSv-77DfD7O-vc.jpg",
        "edited": false,
        "author_flair_css_class": null,
        "author_flair_richtext": [],
        "gildings": {},
        "post_hint": "hosted:video",
        "content_categories": null,
        "is_self": false,
        "mod_note": null,
        "created": 1558225454,
        "link_flair_type": "text",
        "wls": 6,
        "banned_by": null,
        "author_flair_type": "text",
        "domain": "v.redd.it",
        "selftext_html": null,
        "likes": null,
        "suggested_sort": null,
        "banned_at_utc": null,
        "view_count": null,
        "archived": false,
        "no_follow": false,
        "is_crosspostable": false,
        "pinned": false,
        "over_18": false,
        "preview": {
          "images": [
            {
              "source": {
                "url": "https://external-preview.redd.it/j7GRzg_OoIGwbncG3kN4-qjrdxied_ZZQ6sm1xYD9U0.png?format=pjpg&amp;auto=webp&amp;s=7b8dc6e5098db7ad3d73e76961ac8b6dcb2f72e2",
                "width": 1334,
                "height": 750
              },
              "resolutions": [
                {
                  "url": "https://external-preview.redd.it/j7GRzg_OoIGwbncG3kN4-qjrdxied_ZZQ6sm1xYD9U0.png?width=108&amp;crop=smart&amp;format=pjpg&amp;auto=webp&amp;s=89d7e95ec2753d3fa5fdb2e0e6769ffedb5454c4",
                  "width": 108,
                  "height": 60
                },
                {
                  "url": "https://external-preview.redd.it/j7GRzg_OoIGwbncG3kN4-qjrdxied_ZZQ6sm1xYD9U0.png?width=216&amp;crop=smart&amp;format=pjpg&amp;auto=webp&amp;s=def7aeb5a8e9b67f07b118323c341e58dfa77f25",
                  "width": 216,
                  "height": 121
                },
                {
                  "url": "https://external-preview.redd.it/j7GRzg_OoIGwbncG3kN4-qjrdxied_ZZQ6sm1xYD9U0.png?width=320&amp;crop=smart&amp;format=pjpg&amp;auto=webp&amp;s=18031a2d67453d58a5e04ff48e05ba180119ac46",
                  "width": 320,
                  "height": 179
                },
                {
                  "url": "https://external-preview.redd.it/j7GRzg_OoIGwbncG3kN4-qjrdxied_ZZQ6sm1xYD9U0.png?width=640&amp;crop=smart&amp;format=pjpg&amp;auto=webp&amp;s=cb8270a38c0489481108afbb2456d73d0890ef2d",
                  "width": 640,
                  "height": 359
                },
                {
                  "url": "https://external-preview.redd.it/j7GRzg_OoIGwbncG3kN4-qjrdxied_ZZQ6sm1xYD9U0.png?width=960&amp;crop=smart&amp;format=pjpg&amp;auto=webp&amp;s=7f04a08ab4af7ca0cedadcbb4b770de619e490e5",
                  "width": 960,
                  "height": 539
                },
                {
                  "url": "https://external-preview.redd.it/j7GRzg_OoIGwbncG3kN4-qjrdxied_ZZQ6sm1xYD9U0.png?width=1080&amp;crop=smart&amp;format=pjpg&amp;auto=webp&amp;s=5ae712697bbd56f5ebcb845f288e71269f116702",
                  "width": 1080,
                  "height": 607
                }
              ],
              "variants": {},
              "id": "iCKiFX1eHLPaog_sEOXGD8cssxYOmY_YV3_MVAeQ4nM"
            }
          ],
          "enabled": false
        },
        "all_awardings": [],
        "media_only": false,
        "can_gild": false,
        "spoiler": false,
        "locked": false,
        "author_flair_text": null,
        "visited": false,
        "num_reports": null,
        "distinguished": null,
        "subreddit_id": "t5_2x93b",
        "mod_reason_by": null,
        "removal_reason": null,
        "link_flair_background_color": "",
        "id": "bq5s8s",
        "is_robot_indexable": true,
        "report_reasons": null,
        "author": "pbmo-",
        "num_crossposts": 12,
        "num_comments": 333,
        "send_replies": true,
        "whitelist_status": "all_ads",
        "contest_mode": false,
        "mod_reports": [],
        "author_patreon_flair": false,
        "author_flair_text_color": null,
        "permalink": "/r/oddlysatisfying/comments/bq5s8s/soft_tetris_by_c4d4u/",
        "parent_whitelist_status": "all_ads",
        "stickied": false,
        "url": "https://v.redd.it/4pm6ha60xzy21",
        "subreddit_subscribers": 3000846,
        "created_utc": 1558196654,
        "media": {
          "reddit_video": {
            "fallback_url": "https://v.redd.it/4pm6ha60xzy21/DASH_1080?source=fallback",
            "height": 750,
            "width": 1334,
            "scrubber_media_url": "https://v.redd.it/4pm6ha60xzy21/DASH_96",
            "dash_url": "https://v.redd.it/4pm6ha60xzy21/DASHPlaylist.mpd",
            "duration": 57,
            "hls_url": "https://v.redd.it/4pm6ha60xzy21/HLSPlaylist.m3u8",
            "is_gif": true,
            "transcoding_status": "completed"
          }
        },
        "is_video": true
      }
    },
    {
      "kind": "t3",
      "data": {
        "approved_at_utc": null,
        "subreddit": "WhitePeopleTwitter",
        "selftext": "",
        "author_fullname": "t2_iqsg6",
        "saved": false,
        "mod_reason_title": null,
        "gilded": 0,
        "clicked": false,
        "title": "Everyone’s invited",
        "link_flair_richtext": [],
        "subreddit_name_prefixed": "r/WhitePeopleTwitter",
        "hidden": false,
        "pwls": 6,
        "link_flair_css_class": null,
        "downs": 0,
        "thumbnail_height": 140,
        "hide_score": false,
        "name": "t3_bq6icb",
        "quarantine": false,
        "link_flair_text_color": "dark",
        "author_flair_background_color": null,
        "subreddit_type": "public",
        "ups": 10771,
        "total_awards_received": 1,
        "media_embed": {},
        "thumbnail_width": 140,
        "author_flair_template_id": null,
        "is_original_content": false,
        "user_reports": [],
        "secure_media": null,
        "is_reddit_media_domain": true,
        "is_meta": false,
        "category": null,
        "secure_media_embed": {},
        "link_flair_text": null,
        "can_mod_post": false,
        "score": 10771,
        "approved_by": null,
        "thumbnail": "https://b.thumbs.redditmedia.com/nW0LqIJ1t1gVI6N5Uko45CnCTTp92ZSR8OUoHGLFQxE.jpg",
        "edited": false,
        "author_flair_css_class": null,
        "author_flair_richtext": [],
        "gildings": {
          "gid_1": 1
        },
        "post_hint": "image",
        "content_categories": null,
        "is_self": false,
        "mod_note": null,
        "created": 1558229479,
        "link_flair_type": "text",
        "wls": 6,
        "banned_by": null,
        "author_flair_type": "text",
        "domain": "i.redd.it",
        "selftext_html": null,
        "likes": null,
        "suggested_sort": null,
        "banned_at_utc": null,
        "view_count": null,
        "archived": false,
        "no_follow": false,
        "is_crosspostable": false,
        "pinned": false,
        "over_18": false,
        "preview": {
          "images": [
            {
              "source": {
                "url": "https://preview.redd.it/6mwaop2490z21.jpg?auto=webp&amp;s=3aca584312718724e3e8ae55eccdcefde30a1820",
                "width": 760,
                "height": 960
              },
              "resolutions": [
                {
                  "url": "https://preview.redd.it/6mwaop2490z21.jpg?width=108&amp;crop=smart&amp;auto=webp&amp;s=34e8c3c9ac2832585a82893975c2feb5a4a18f25",
                  "width": 108,
                  "height": 136
                },
                {
                  "url": "https://preview.redd.it/6mwaop2490z21.jpg?width=216&amp;crop=smart&amp;auto=webp&amp;s=881333c97ed97afb767c6ace3b1ccf107de8c5d5",
                  "width": 216,
                  "height": 272
                },
                {
                  "url": "https://preview.redd.it/6mwaop2490z21.jpg?width=320&amp;crop=smart&amp;auto=webp&amp;s=c623279bb14a2889abee800b364adef47ed65b14",
                  "width": 320,
                  "height": 404
                },
                {
                  "url": "https://preview.redd.it/6mwaop2490z21.jpg?width=640&amp;crop=smart&amp;auto=webp&amp;s=4c1753b5d29087c259db397c97fc86bc4e4fcf1e",
                  "width": 640,
                  "height": 808
                }
              ],
              "variants": {},
              "id": "9xNs2TrojK7htLRqr-rWL_UtLvOSPA2CbwFha7z9w-o"
            }
          ],
          "enabled": true
        },
        "all_awardings": [
          {
            "is_enabled": true,
            "count": 1,
            "subreddit_id": null,
            "description": "Silver Award",
            "coin_reward": 0,
            "icon_width": 512,
            "icon_url": "https://www.redditstatic.com/gold/awards/icon/silver_512.png",
            "days_of_premium": 0,
            "icon_height": 512,
            "resized_icons": [
              {
                "url": "https://www.redditstatic.com/gold/awards/icon/silver_16.png",
                "width": 16,
                "height": 16
              },
              {
                "url": "https://www.redditstatic.com/gold/awards/icon/silver_32.png",
                "width": 32,
                "height": 32
              },
              {
                "url": "https://www.redditstatic.com/gold/awards/icon/silver_48.png",
                "width": 48,
                "height": 48
              },
              {
                "url": "https://www.redditstatic.com/gold/awards/icon/silver_64.png",
                "width": 64,
                "height": 64
              },
              {
                "url": "https://www.redditstatic.com/gold/awards/icon/silver_128.png",
                "width": 128,
                "height": 128
              }
            ],
            "days_of_drip_extension": 0,
            "award_type": "global",
            "coin_price": 100,
            "id": "gid_1",
            "name": "Silver"
          }
        ],
        "media_only": false,
        "can_gild": false,
        "spoiler": false,
        "locked": false,
        "author_flair_text": null,
        "visited": false,
        "num_reports": null,
        "distinguished": null,
        "subreddit_id": "t5_35n7t",
        "mod_reason_by": null,
        "removal_reason": null,
        "link_flair_background_color": "",
        "id": "bq6icb",
        "is_robot_indexable": true,
        "report_reasons": null,
        "author": "GallowBoob",
        "num_crossposts": 7,
        "num_comments": 222,
        "send_replies": false,
        "whitelist_status": "all_ads",
        "contest_mode": false,
        "mod_reports": [],
        "author_patreon_flair": false,
        "author_flair_text_color": null,
        "permalink": "/r/WhitePeopleTwitter/comments/bq6icb/everyones_invited/",
        "parent_whitelist_status": "all_ads",
        "stickied": false,
        "url": "https://i.redd.it/6mwaop2490z21.jpg",
        "subreddit_subscribers": 1142051,
        "created_utc": 1558200679,
        "media": null,
        "is_video": false
      }
    },
    {
      "kind": "t3",
      "data": {
        "approved_at_utc": null,
        "subreddit": "Tinder",
        "selftext": "",
        "author_fullname": "t2_13ppq6ww",
        "saved": false,
        "mod_reason_title": null,
        "gilded": 0,
        "clicked": false,
        "title": "Destroy yourself for the greater good",
        "link_flair_richtext": [],
        "subreddit_name_prefixed": "r/Tinder",
        "hidden": false,
        "pwls": 6,
        "link_flair_css_class": null,
        "downs": 0,
        "thumbnail_height": 140,
        "hide_score": false,
        "name": "t3_bq5v6x",
        "quarantine": false,
        "link_flair_text_color": "dark",
        "author_flair_background_color": null,
        "subreddit_type": "public",
        "ups": 13462,
        "total_awards_received": 0,
        "media_embed": {},
        "thumbnail_width": 140,
        "author_flair_template_id": null,
        "is_original_content": false,
        "user_reports": [],
        "secure_media": null,
        "is_reddit_media_domain": true,
        "is_meta": false,
        "category": null,
        "secure_media_embed": {},
        "link_flair_text": null,
        "can_mod_post": false,
        "score": 13462,
        "approved_by": null,
        "thumbnail": "https://b.thumbs.redditmedia.com/AC9Jk56XpOdIQQqWIRGxoiB2sQmUa53ev418S9iSGMc.jpg",
        "edited": false,
        "author_flair_css_class": null,
        "author_flair_richtext": [],
        "gildings": {},
        "post_hint": "image",
        "content_categories": null,
        "is_self": false,
        "mod_note": null,
        "created": 1558225903,
        "link_flair_type": "text",
        "wls": 6,
        "banned_by": null,
        "author_flair_type": "text",
        "domain": "i.redd.it",
        "selftext_html": null,
        "likes": null,
        "suggested_sort": "confidence",
        "banned_at_utc": null,
        "view_count": null,
        "archived": false,
        "no_follow": false,
        "is_crosspostable": false,
        "pinned": false,
        "over_18": false,
        "preview": {
          "images": [
            {
              "source": {
                "url": "https://preview.redd.it/80tycz6hyzy21.jpg?auto=webp&amp;s=aeda92a13a502fba418278065fd4d5546e6d355e",
                "width": 750,
                "height": 1334
              },
              "resolutions": [
                {
                  "url": "https://preview.redd.it/80tycz6hyzy21.jpg?width=108&amp;crop=smart&amp;auto=webp&amp;s=3cd3b7e1049a820e8ad5c26c29874ecac0576ea8",
                  "width": 108,
                  "height": 192
                },
                {
                  "url": "https://preview.redd.it/80tycz6hyzy21.jpg?width=216&amp;crop=smart&amp;auto=webp&amp;s=dadd44e43cf07534084efc4f22dc4af41ecd4e91",
                  "width": 216,
                  "height": 384
                },
                {
                  "url": "https://preview.redd.it/80tycz6hyzy21.jpg?width=320&amp;crop=smart&amp;auto=webp&amp;s=0143ba8ef4921dff5bde8c0557ab6b78b47198c0",
                  "width": 320,
                  "height": 569
                },
                {
                  "url": "https://preview.redd.it/80tycz6hyzy21.jpg?width=640&amp;crop=smart&amp;auto=webp&amp;s=f3ab0ed3b95dd6214f404c90d577727031e7bf4a",
                  "width": 640,
                  "height": 1138
                }
              ],
              "variants": {},
              "id": "HAqNCI_TJZVia-FTtkPlCKeVsojm0-xypcr9uHDVsQM"
            }
          ],
          "enabled": true
        },
        "all_awardings": [],
        "media_only": false,
        "can_gild": false,
        "spoiler": false,
        "locked": false,
        "author_flair_text": null,
        "visited": false,
        "num_reports": null,
        "distinguished": null,
        "subreddit_id": "t5_2w7mz",
        "mod_reason_by": null,
        "removal_reason": null,
        "link_flair_background_color": "",
        "id": "bq5v6x",
        "is_robot_indexable": true,
        "report_reasons": null,
        "author": "wutangstan080",
        "num_crossposts": 1,
        "num_comments": 149,
        "send_replies": true,
        "whitelist_status": "all_ads",
        "contest_mode": false,
        "mod_reports": [],
        "author_patreon_flair": false,
        "author_flair_text_color": null,
        "permalink": "/r/Tinder/comments/bq5v6x/destroy_yourself_for_the_greater_good/",
        "parent_whitelist_status": "all_ads",
        "stickied": false,
        "url": "https://i.redd.it/80tycz6hyzy21.jpg",
        "subreddit_subscribers": 2223204,
        "created_utc": 1558197103,
        "media": null,
        "is_video": false
      }
    },
    {
      "kind": "t3",
      "data": {
        "approved_at_utc": null,
        "subreddit": "aww",
        "selftext": "",
        "author_fullname": "t2_12wbjw",
        "saved": false,
        "mod_reason_title": null,
        "gilded": 0,
        "clicked": false,
        "title": "This is Conrad.",
        "link_flair_richtext": [],
        "subreddit_name_prefixed": "r/aww",
        "hidden": false,
        "pwls": 6,
        "link_flair_css_class": null,
        "downs": 0,
        "thumbnail_height": 135,
        "hide_score": false,
        "name": "t3_bq5666",
        "quarantine": false,
        "link_flair_text_color": "dark",
        "author_flair_background_color": null,
        "subreddit_type": "public",
        "ups": 42985,
        "total_awards_received": 3,
        "media_embed": {},
        "thumbnail_width": 140,
        "author_flair_template_id": null,
        "is_original_content": false,
        "user_reports": [],
        "secure_media": null,
        "is_reddit_media_domain": true,
        "is_meta": false,
        "category": null,
        "secure_media_embed": {},
        "link_flair_text": null,
        "can_mod_post": false,
        "score": 42985,
        "approved_by": null,
        "thumbnail": "https://b.thumbs.redditmedia.com/1YwrMCZopPRsX3BxeOf2GXYdIz5iWY0erJNf7jSy8hE.jpg",
        "edited": false,
        "author_flair_css_class": null,
        "author_flair_richtext": [],
        "gildings": {
          "gid_1": 3
        },
        "post_hint": "image",
        "content_categories": null,
        "is_self": false,
        "mod_note": null,
        "created": 1558222026,
        "link_flair_type": "text",
        "wls": 6,
        "banned_by": null,
        "author_flair_type": "text",
        "domain": "i.redd.it",
        "selftext_html": null,
        "likes": null,
        "suggested_sort": null,
        "banned_at_utc": null,
        "view_count": null,
        "archived": false,
        "no_follow": false,
        "is_crosspostable": false,
        "pinned": false,
        "over_18": false,
        "preview": {
          "images": [
            {
              "source": {
                "url": "https://preview.redd.it/js9kb3jwmzy21.jpg?auto=webp&amp;s=633e17af52d66ad58fbaeeed8ef8a4610f2d8137",
                "width": 960,
                "height": 926
              },
              "resolutions": [
                {
                  "url": "https://preview.redd.it/js9kb3jwmzy21.jpg?width=108&amp;crop=smart&amp;auto=webp&amp;s=c7c88063d48cfcdd55d59abd9d23506e527533c4",
                  "width": 108,
                  "height": 104
                },
                {
                  "url": "https://preview.redd.it/js9kb3jwmzy21.jpg?width=216&amp;crop=smart&amp;auto=webp&amp;s=29727c3988accdb6630b626e9cc05e546e809f6f",
                  "width": 216,
                  "height": 208
                },
                {
                  "url": "https://preview.redd.it/js9kb3jwmzy21.jpg?width=320&amp;crop=smart&amp;auto=webp&amp;s=f0d5974ac7e5d3894c07bc579736c98d154225c2",
                  "width": 320,
                  "height": 308
                },
                {
                  "url": "https://preview.redd.it/js9kb3jwmzy21.jpg?width=640&amp;crop=smart&amp;auto=webp&amp;s=2740148a09e3af57ea060a2378bfe08d9d2fd871",
                  "width": 640,
                  "height": 617
                },
                {
                  "url": "https://preview.redd.it/js9kb3jwmzy21.jpg?width=960&amp;crop=smart&amp;auto=webp&amp;s=44efe95e3fdb216afb558350db9a5458831af13a",
                  "width": 960,
                  "height": 926
                }
              ],
              "variants": {},
              "id": "NppZ4_p-tcYiNG7RR2dIECQFSyi3NK3A4jrs__jbBPI"
            }
          ],
          "enabled": true
        },
        "all_awardings": [
          {
            "is_enabled": true,
            "count": 3,
            "subreddit_id": null,
            "description": "Silver Award",
            "coin_reward": 0,
            "icon_width": 512,
            "icon_url": "https://www.redditstatic.com/gold/awards/icon/silver_512.png",
            "days_of_premium": 0,
            "icon_height": 512,
            "resized_icons": [
              {
                "url": "https://www.redditstatic.com/gold/awards/icon/silver_16.png",
                "width": 16,
                "height": 16
              },
              {
                "url": "https://www.redditstatic.com/gold/awards/icon/silver_32.png",
                "width": 32,
                "height": 32
              },
              {
                "url": "https://www.redditstatic.com/gold/awards/icon/silver_48.png",
                "width": 48,
                "height": 48
              },
              {
                "url": "https://www.redditstatic.com/gold/awards/icon/silver_64.png",
                "width": 64,
                "height": 64
              },
              {
                "url": "https://www.redditstatic.com/gold/awards/icon/silver_128.png",
                "width": 128,
                "height": 128
              }
            ],
            "days_of_drip_extension": 0,
            "award_type": "global",
            "coin_price": 100,
            "id": "gid_1",
            "name": "Silver"
          }
        ],
        "media_only": false,
        "can_gild": false,
        "spoiler": false,
        "locked": false,
        "author_flair_text": null,
        "visited": false,
        "num_reports": null,
        "distinguished": null,
        "subreddit_id": "t5_2qh1o",
        "mod_reason_by": null,
        "removal_reason": null,
        "link_flair_background_color": "",
        "id": "bq5666",
        "is_robot_indexable": true,
        "report_reasons": null,
        "author": "Milo_Hackenschmidt",
        "num_crossposts": 10,
        "num_comments": 490,
        "send_replies": true,
        "whitelist_status": "all_ads",
        "contest_mode": false,
        "mod_reports": [],
        "author_patreon_flair": false,
        "author_flair_text_color": null,
        "permalink": "/r/aww/comments/bq5666/this_is_conrad/",
        "parent_whitelist_status": "all_ads",
        "stickied": false,
        "url": "https://i.redd.it/js9kb3jwmzy21.jpg",
        "subreddit_subscribers": 20599704,
        "created_utc": 1558193226,
        "media": null,
        "is_video": false
      }
    },
    {
      "kind": "t3",
      "data": {
        "approved_at_utc": null,
        "subreddit": "technicallythetruth",
        "selftext": "",
        "author_fullname": "t2_3qjm4n",
        "saved": false,
        "mod_reason_title": null,
        "gilded": 0,
        "clicked": false,
        "title": "The Secret is Out",
        "link_flair_richtext": [],
        "subreddit_name_prefixed": "r/technicallythetruth",
        "hidden": false,
        "pwls": 6,
        "link_flair_css_class": null,
        "downs": 0,
        "thumbnail_height": 139,
        "hide_score": false,
        "name": "t3_bq5r0t",
        "quarantine": false,
        "link_flair_text_color": "dark",
        "author_flair_background_color": null,
        "subreddit_type": "public",
        "ups": 15148,
        "total_awards_received": 0,
        "media_embed": {},
        "thumbnail_width": 140,
        "author_flair_template_id": null,
        "is_original_content": false,
        "user_reports": [],
        "secure_media": null,
        "is_reddit_media_domain": true,
        "is_meta": false,
        "category": null,
        "secure_media_embed": {},
        "link_flair_text": null,
        "can_mod_post": false,
        "score": 15148,
        "approved_by": null,
        "thumbnail": "https://b.thumbs.redditmedia.com/rHik3V7UQJK0RtPsbyM1nXUZFmZiUTxQcO2iy8wox3M.jpg",
        "edited": false,
        "author_flair_css_class": null,
        "author_flair_richtext": [],
        "gildings": {},
        "post_hint": "image",
        "content_categories": null,
        "is_self": false,
        "mod_note": null,
        "created": 1558225266,
        "link_flair_type": "text",
        "wls": 6,
        "banned_by": null,
        "author_flair_type": "text",
        "domain": "i.redd.it",
        "selftext_html": null,
        "likes": null,
        "suggested_sort": null,
        "banned_at_utc": null,
        "view_count": null,
        "archived": false,
        "no_follow": false,
        "is_crosspostable": false,
        "pinned": false,
        "over_18": false,
        "preview": {
          "images": [
            {
              "source": {
                "url": "https://preview.redd.it/idfxw01lwzy21.jpg?auto=webp&amp;s=111e687f14f27aff78eb2772f91fb9730541d5a1",
                "width": 750,
                "height": 747
              },
              "resolutions": [
                {
                  "url": "https://preview.redd.it/idfxw01lwzy21.jpg?width=108&amp;crop=smart&amp;auto=webp&amp;s=662148bca990d42bb804a2df8b0e57a1cb46656f",
                  "width": 108,
                  "height": 107
                },
                {
                  "url": "https://preview.redd.it/idfxw01lwzy21.jpg?width=216&amp;crop=smart&amp;auto=webp&amp;s=82d11a2e56eb9a4ad5170d06293e773ab383ea58",
                  "width": 216,
                  "height": 215
                },
                {
                  "url": "https://preview.redd.it/idfxw01lwzy21.jpg?width=320&amp;crop=smart&amp;auto=webp&amp;s=159c81d76e1a2c6616e03a51aea17ebcc0908d97",
                  "width": 320,
                  "height": 318
                },
                {
                  "url": "https://preview.redd.it/idfxw01lwzy21.jpg?width=640&amp;crop=smart&amp;auto=webp&amp;s=f72dfa1c300144a443a8853d5190efbaeda21729",
                  "width": 640,
                  "height": 637
                }
              ],
              "variants": {},
              "id": "m1mVMNMVFFwwXe0wftKa5A8UFsuxF5txgRkuPMLgduc"
            }
          ],
          "enabled": true
        },
        "all_awardings": [],
        "media_only": false,
        "can_gild": false,
        "spoiler": false,
        "locked": false,
        "author_flair_text": null,
        "visited": false,
        "num_reports": null,
        "distinguished": null,
        "subreddit_id": "t5_3pzez",
        "mod_reason_by": null,
        "removal_reason": null,
        "link_flair_background_color": "",
        "id": "bq5r0t",
        "is_robot_indexable": true,
        "report_reasons": null,
        "author": "Dan_Da_Man1117",
        "num_crossposts": 4,
        "num_comments": 94,
        "send_replies": true,
        "whitelist_status": "all_ads",
        "contest_mode": false,
        "mod_reports": [],
        "author_patreon_flair": false,
        "author_flair_text_color": null,
        "permalink": "/r/technicallythetruth/comments/bq5r0t/the_secret_is_out/",
        "parent_whitelist_status": "all_ads",
        "stickied": false,
        "url": "https://i.redd.it/idfxw01lwzy21.jpg",
        "subreddit_subscribers": 483839,
        "created_utc": 1558196466,
        "media": null,
        "is_video": false
      }
    },
    {
      "kind": "t3",
      "data": {
        "approved_at_utc": null,
        "subreddit": "instant_regret",
        "selftext": "",
        "author_fullname": "t2_sdlg0",
        "saved": false,
        "mod_reason_title": null,
        "gilded": 1,
        "clicked": false,
        "title": "Ball to the face!",
        "link_flair_richtext": [],
        "subreddit_name_prefixed": "r/instant_regret",
        "hidden": false,
        "pwls": 6,
        "link_flair_css_class": null,
        "downs": 0,
        "thumbnail_height": 140,
        "hide_score": false,
        "name": "t3_bq7zvf",
        "quarantine": false,
        "link_flair_text_color": "dark",
        "author_flair_background_color": null,
        "subreddit_type": "public",
        "ups": 3634,
        "total_awards_received": 1,
        "media_embed": {
          "content": "&lt;iframe class=\"embedly-embed\" src=\"https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fgfycat.com%2Fifr%2Fthreadbaremistykid&amp;url=https%3A%2F%2Fgfycat.com%2Fthreadbaremistykid-funny-fail&amp;image=https%3A%2F%2Fthumbs.gfycat.com%2FThreadbareMistyKid-size_restricted.gif&amp;key=ed8fa8699ce04833838e66ce79ba05f1&amp;type=text%2Fhtml&amp;schema=gfycat\" width=\"600\" height=\"1067\" scrolling=\"no\" frameborder=\"0\" allow=\"autoplay; fullscreen\" allowfullscreen=\"true\"&gt;&lt;/iframe&gt;",
          "width": 600,
          "scrolling": false,
          "height": 1067
        },
        "thumbnail_width": 140,
        "author_flair_template_id": null,
        "is_original_content": false,
        "user_reports": [],
        "secure_media": {
          "oembed": {
            "provider_url": "https://gfycat.com",
            "description": "Watch QuaNAuY2gNrlAQVJ GIF on Gfycat. Discover more fail, funny GIFs on Gfycat",
            "title": "QuaNAuY2gNrlAQVJ",
            "thumbnail_width": 349,
            "height": 1067,
            "width": 600,
            "html": "&lt;iframe class=\"embedly-embed\" src=\"https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fgfycat.com%2Fifr%2Fthreadbaremistykid&amp;url=https%3A%2F%2Fgfycat.com%2Fthreadbaremistykid-funny-fail&amp;image=https%3A%2F%2Fthumbs.gfycat.com%2FThreadbareMistyKid-size_restricted.gif&amp;key=ed8fa8699ce04833838e66ce79ba05f1&amp;type=text%2Fhtml&amp;schema=gfycat\" width=\"600\" height=\"1067\" scrolling=\"no\" frameborder=\"0\" allow=\"autoplay; fullscreen\" allowfullscreen=\"true\"&gt;&lt;/iframe&gt;",
            "version": "1.0",
            "provider_name": "Gfycat",
            "thumbnail_url": "https://thumbs.gfycat.com/ThreadbareMistyKid-size_restricted.gif",
            "type": "video",
            "thumbnail_height": 620
          },
          "type": "gfycat.com"
        },
        "is_reddit_media_domain": false,
        "is_meta": false,
        "category": null,
        "secure_media_embed": {
          "content": "&lt;iframe class=\"embedly-embed\" src=\"https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fgfycat.com%2Fifr%2Fthreadbaremistykid&amp;url=https%3A%2F%2Fgfycat.com%2Fthreadbaremistykid-funny-fail&amp;image=https%3A%2F%2Fthumbs.gfycat.com%2FThreadbareMistyKid-size_restricted.gif&amp;key=ed8fa8699ce04833838e66ce79ba05f1&amp;type=text%2Fhtml&amp;schema=gfycat\" width=\"600\" height=\"1067\" scrolling=\"no\" frameborder=\"0\" allow=\"autoplay; fullscreen\" allowfullscreen=\"true\"&gt;&lt;/iframe&gt;",
          "width": 600,
          "scrolling": false,
          "media_domain_url": "https://www.redditmedia.com/mediaembed/bq7zvf",
          "height": 1067
        },
        "link_flair_text": null,
        "can_mod_post": false,
        "score": 3634,
        "approved_by": null,
        "thumbnail": "https://a.thumbs.redditmedia.com/Ao9Gj3sYwCNXRMqWRULjmzl_JkawKpGV3ZPJuHEZ4j8.jpg",
        "edited": false,
        "author_flair_css_class": null,
        "author_flair_richtext": [],
        "gildings": {
          "gid_2": 1
        },
        "post_hint": "rich:video",
        "content_categories": null,
        "is_self": false,
        "mod_note": null,
        "created": 1558237684,
        "link_flair_type": "text",
        "wls": 6,
        "banned_by": null,
        "author_flair_type": "text",
        "domain": "gfycat.com",
        "selftext_html": null,
        "likes": null,
        "suggested_sort": null,
        "banned_at_utc": null,
        "view_count": null,
        "archived": false,
        "no_follow": false,
        "is_crosspostable": false,
        "pinned": false,
        "over_18": false,
        "preview": {
          "images": [
            {
              "source": {
                "url": "https://external-preview.redd.it/CMNGkfBSNIca0xTKLb922A0TMBJo3hSeid7UMmplLVo.gif?format=png8&amp;s=2ec1079420fa9d4c4d3b4529e4cc16bb376ff77f",
                "width": 349,
                "height": 620
              },
              "resolutions": [
                {
                  "url": "https://external-preview.redd.it/CMNGkfBSNIca0xTKLb922A0TMBJo3hSeid7UMmplLVo.gif?width=108&amp;crop=smart&amp;format=png8&amp;s=d2cfe807b6c82e3f8adf5f9fd066b060e9d7d866",
                  "width": 108,
                  "height": 191
                },
                {
                  "url": "https://external-preview.redd.it/CMNGkfBSNIca0xTKLb922A0TMBJo3hSeid7UMmplLVo.gif?width=216&amp;crop=smart&amp;format=png8&amp;s=4bd1b72608540a5fec70d8690bbf0a6c904c08b0",
                  "width": 216,
                  "height": 383
                },
                {
                  "url": "https://external-preview.redd.it/CMNGkfBSNIca0xTKLb922A0TMBJo3hSeid7UMmplLVo.gif?width=320&amp;crop=smart&amp;format=png8&amp;s=dec8952d595a17735979da191126a73d4ed6399f",
                  "width": 320,
                  "height": 568
                }
              ],
              "variants": {
                "gif": {
                  "source": {
                    "url": "https://external-preview.redd.it/CMNGkfBSNIca0xTKLb922A0TMBJo3hSeid7UMmplLVo.gif?s=363f1667a0374d7ac04f45f2b7661db9030320d8",
                    "width": 349,
                    "height": 620
                  },
                  "resolutions": [
                    {
                      "url": "https://external-preview.redd.it/CMNGkfBSNIca0xTKLb922A0TMBJo3hSeid7UMmplLVo.gif?width=108&amp;crop=smart&amp;s=2b340915861421a4199ba27b9be272e6c7d1392a",
                      "width": 108,
                      "height": 191
                    },
                    {
                      "url": "https://external-preview.redd.it/CMNGkfBSNIca0xTKLb922A0TMBJo3hSeid7UMmplLVo.gif?width=216&amp;crop=smart&amp;s=5a81756c4d07c8aa2d0ae6ba8542c7360bb807dd",
                      "width": 216,
                      "height": 383
                    },
                    {
                      "url": "https://external-preview.redd.it/CMNGkfBSNIca0xTKLb922A0TMBJo3hSeid7UMmplLVo.gif?width=320&amp;crop=smart&amp;s=d2239f2fc747c46b0f76defb5dd38d582c992e38",
                      "width": 320,
                      "height": 568
                    }
                  ]
                },
                "mp4": {
                  "source": {
                    "url": "https://external-preview.redd.it/CMNGkfBSNIca0xTKLb922A0TMBJo3hSeid7UMmplLVo.gif?format=mp4&amp;s=a6e192d0acf49dc6774432c507a7381cbfaeae91",
                    "width": 349,
                    "height": 620
                  },
                  "resolutions": [
                    {
                      "url": "https://external-preview.redd.it/CMNGkfBSNIca0xTKLb922A0TMBJo3hSeid7UMmplLVo.gif?width=108&amp;format=mp4&amp;s=056e03383d5553da5b71c99b6e7919bf6b880c6c",
                      "width": 108,
                      "height": 191
                    },
                    {
                      "url": "https://external-preview.redd.it/CMNGkfBSNIca0xTKLb922A0TMBJo3hSeid7UMmplLVo.gif?width=216&amp;format=mp4&amp;s=d13a2f73fb6e2cb7bddf3ebb382b1ba4260a4119",
                      "width": 216,
                      "height": 383
                    },
                    {
                      "url": "https://external-preview.redd.it/CMNGkfBSNIca0xTKLb922A0TMBJo3hSeid7UMmplLVo.gif?width=320&amp;format=mp4&amp;s=b252dab0aab72a3751c8831b3953543eb9aed129",
                      "width": 320,
                      "height": 568
                    }
                  ]
                }
              },
              "id": "TVUGHT_yEWSOyFUL7a1Qxs1XI0-GzK1dovUGIS7jzn8"
            }
          ],
          "reddit_video_preview": {
            "fallback_url": "https://v.redd.it/r0nb0a2jx0z21/DASH_1080",
            "height": 1080,
            "width": 608,
            "scrubber_media_url": "https://v.redd.it/r0nb0a2jx0z21/DASH_96",
            "dash_url": "https://v.redd.it/r0nb0a2jx0z21/DASHPlaylist.mpd",
            "duration": 2,
            "hls_url": "https://v.redd.it/r0nb0a2jx0z21/HLSPlaylist.m3u8",
            "is_gif": true,
            "transcoding_status": "completed"
          },
          "enabled": true
        },
        "all_awardings": [
          {
            "is_enabled": true,
            "count": 1,
            "subreddit_id": null,
            "description": "Gold Award",
            "coin_reward": 100,
            "icon_width": 512,
            "icon_url": "https://www.redditstatic.com/gold/awards/icon/gold_512.png",
            "days_of_premium": 7,
            "icon_height": 512,
            "resized_icons": [
              {
                "url": "https://www.redditstatic.com/gold/awards/icon/gold_16.png",
                "width": 16,
                "height": 16
              },
              {
                "url": "https://www.redditstatic.com/gold/awards/icon/gold_32.png",
                "width": 32,
                "height": 32
              },
              {
                "url": "https://www.redditstatic.com/gold/awards/icon/gold_48.png",
                "width": 48,
                "height": 48
              },
              {
                "url": "https://www.redditstatic.com/gold/awards/icon/gold_64.png",
                "width": 64,
                "height": 64
              },
              {
                "url": "https://www.redditstatic.com/gold/awards/icon/gold_128.png",
                "width": 128,
                "height": 128
              }
            ],
            "days_of_drip_extension": 0,
            "award_type": "global",
            "coin_price": 500,
            "id": "gid_2",
            "name": "Gold"
          }
        ],
        "media_only": false,
        "can_gild": false,
        "spoiler": false,
        "locked": false,
        "author_flair_text": null,
        "visited": false,
        "num_reports": null,
        "distinguished": null,
        "subreddit_id": "t5_32dy0",
        "mod_reason_by": null,
        "removal_reason": null,
        "link_flair_background_color": "",
        "id": "bq7zvf",
        "is_robot_indexable": true,
        "report_reasons": null,
        "author": "LeucisticPython",
        "num_crossposts": 9,
        "num_comments": 82,
        "send_replies": true,
        "whitelist_status": "all_ads",
        "contest_mode": false,
        "mod_reports": [],
        "author_patreon_flair": false,
        "author_flair_text_color": null,
        "permalink": "/r/instant_regret/comments/bq7zvf/ball_to_the_face/",
        "parent_whitelist_status": "all_ads",
        "stickied": false,
        "url": "https://gfycat.com/threadbaremistykid",
        "subreddit_subscribers": 1717838,
        "created_utc": 1558208884,
        "media": {
          "oembed": {
            "provider_url": "https://gfycat.com",
            "description": "Watch QuaNAuY2gNrlAQVJ GIF on Gfycat. Discover more fail, funny GIFs on Gfycat",
            "title": "QuaNAuY2gNrlAQVJ",
            "thumbnail_width": 349,
            "height": 1067,
            "width": 600,
            "html": "&lt;iframe class=\"embedly-embed\" src=\"https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fgfycat.com%2Fifr%2Fthreadbaremistykid&amp;url=https%3A%2F%2Fgfycat.com%2Fthreadbaremistykid-funny-fail&amp;image=https%3A%2F%2Fthumbs.gfycat.com%2FThreadbareMistyKid-size_restricted.gif&amp;key=ed8fa8699ce04833838e66ce79ba05f1&amp;type=text%2Fhtml&amp;schema=gfycat\" width=\"600\" height=\"1067\" scrolling=\"no\" frameborder=\"0\" allow=\"autoplay; fullscreen\" allowfullscreen=\"true\"&gt;&lt;/iframe&gt;",
            "version": "1.0",
            "provider_name": "Gfycat",
            "thumbnail_url": "https://thumbs.gfycat.com/ThreadbareMistyKid-size_restricted.gif",
            "type": "video",
            "thumbnail_height": 620
          },
          "type": "gfycat.com"
        },
        "is_video": false
      }
    },
    {
      "kind": "t3",
      "data": {
        "approved_at_utc": null,
        "subreddit": "NatureIsFuckingLit",
        "selftext": "",
        "author_fullname": "t2_2g535jcu",
        "saved": false,
        "mod_reason_title": null,
        "gilded": 0,
        "clicked": false,
        "title": "🔥 How seals move on land 🔥",
        "link_flair_richtext": [],
        "subreddit_name_prefixed": "r/NatureIsFuckingLit",
        "hidden": false,
        "pwls": 6,
        "link_flair_css_class": null,
        "downs": 0,
        "thumbnail_height": 78,
        "hide_score": false,
        "name": "t3_bq5j19",
        "quarantine": false,
        "link_flair_text_color": "dark",
        "author_flair_background_color": "transparent",
        "subreddit_type": "public",
        "ups": 13392,
        "total_awards_received": 0,
        "media_embed": {
          "content": "&lt;iframe class=\"embedly-embed\" src=\"https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fgfycat.com%2Fifr%2Fshallowsphericalheifer&amp;url=https%3A%2F%2Fgfycat.com%2Fshallowsphericalheifer&amp;image=https%3A%2F%2Fthumbs.gfycat.com%2FShallowSphericalHeifer-size_restricted.gif&amp;key=ed8fa8699ce04833838e66ce79ba05f1&amp;type=text%2Fhtml&amp;schema=gfycat\" width=\"600\" height=\"338\" scrolling=\"no\" frameborder=\"0\" allow=\"autoplay; fullscreen\" allowfullscreen=\"true\"&gt;&lt;/iframe&gt;",
          "width": 600,
          "scrolling": false,
          "height": 338
        },
        "thumbnail_width": 140,
        "author_flair_template_id": "2e060e9c-48f7-11e9-9a87-0e600be6b002",
        "is_original_content": false,
        "user_reports": [],
        "secure_media": {
          "type": "gfycat.com",
          "oembed": {
            "provider_url": "https://gfycat.com",
            "description": "Watch How seals move on land GIF on Gfycat. Discover more related GIFs on Gfycat",
            "title": "How seals move on land",
            "type": "video",
            "thumbnail_width": 444,
            "height": 338,
            "width": 600,
            "html": "&lt;iframe class=\"embedly-embed\" src=\"https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fgfycat.com%2Fifr%2Fshallowsphericalheifer&amp;url=https%3A%2F%2Fgfycat.com%2Fshallowsphericalheifer&amp;image=https%3A%2F%2Fthumbs.gfycat.com%2FShallowSphericalHeifer-size_restricted.gif&amp;key=ed8fa8699ce04833838e66ce79ba05f1&amp;type=text%2Fhtml&amp;schema=gfycat\" width=\"600\" height=\"338\" scrolling=\"no\" frameborder=\"0\" allow=\"autoplay; fullscreen\" allowfullscreen=\"true\"&gt;&lt;/iframe&gt;",
            "version": "1.0",
            "provider_name": "Gfycat",
            "thumbnail_url": "https://thumbs.gfycat.com/ShallowSphericalHeifer-size_restricted.gif",
            "thumbnail_height": 250
          }
        },
        "is_reddit_media_domain": false,
        "is_meta": false,
        "category": null,
        "secure_media_embed": {
          "content": "&lt;iframe class=\"embedly-embed\" src=\"https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fgfycat.com%2Fifr%2Fshallowsphericalheifer&amp;url=https%3A%2F%2Fgfycat.com%2Fshallowsphericalheifer&amp;image=https%3A%2F%2Fthumbs.gfycat.com%2FShallowSphericalHeifer-size_restricted.gif&amp;key=ed8fa8699ce04833838e66ce79ba05f1&amp;type=text%2Fhtml&amp;schema=gfycat\" width=\"600\" height=\"338\" scrolling=\"no\" frameborder=\"0\" allow=\"autoplay; fullscreen\" allowfullscreen=\"true\"&gt;&lt;/iframe&gt;",
          "width": 600,
          "scrolling": false,
          "media_domain_url": "https://www.redditmedia.com/mediaembed/bq5j19",
          "height": 338
        },
        "link_flair_text": null,
        "can_mod_post": false,
        "score": 13392,
        "approved_by": null,
        "thumbnail": "https://b.thumbs.redditmedia.com/75TIwSig3mTUQ-ZTFmhfh8FsUE14l48WxQQlojZj11E.jpg",
        "edited": false,
        "author_flair_css_class": "",
        "author_flair_richtext": [
          {
            "a": ":lit:",
            "e": "emoji",
            "u": "https://emoji.redditmedia.com/ba2qvg8e3tn21_t5_3gdh7/lit"
          }
        ],
        "gildings": {},
        "post_hint": "rich:video",
        "content_categories": null,
        "is_self": false,
        "mod_note": null,
        "created": 1558224032,
        "link_flair_type": "text",
        "wls": 6,
        "banned_by": null,
        "author_flair_type": "richtext",
        "domain": "gfycat.com",
        "selftext_html": null,
        "likes": null,
        "suggested_sort": "confidence",
        "banned_at_utc": null,
        "view_count": null,
        "archived": false,
        "no_follow": false,
        "is_crosspostable": false,
        "pinned": false,
        "over_18": false,
        "preview": {
          "images": [
            {
              "source": {
                "url": "https://external-preview.redd.it/vtavzkmZ4j_Fhn4a31CKPBh6_4xDI7mJZeExWaDUxaI.gif?format=png8&amp;s=ada8d44d97e1e27182cd919eadca1d80e013c197",
                "width": 444,
                "height": 250
              },
              "resolutions": [
                {
                  "url": "https://external-preview.redd.it/vtavzkmZ4j_Fhn4a31CKPBh6_4xDI7mJZeExWaDUxaI.gif?width=108&amp;crop=smart&amp;format=png8&amp;s=ea6e4204a28da551423f9e0fbdeeab958af490b6",
                  "width": 108,
                  "height": 60
                },
                {
                  "url": "https://external-preview.redd.it/vtavzkmZ4j_Fhn4a31CKPBh6_4xDI7mJZeExWaDUxaI.gif?width=216&amp;crop=smart&amp;format=png8&amp;s=e99e0376bbc80f339751c000fe4fa127c408b0f5",
                  "width": 216,
                  "height": 121
                },
                {
                  "url": "https://external-preview.redd.it/vtavzkmZ4j_Fhn4a31CKPBh6_4xDI7mJZeExWaDUxaI.gif?width=320&amp;crop=smart&amp;format=png8&amp;s=3c6878d703d2d7e6782bc23efbba34f9d47a0e66",
                  "width": 320,
                  "height": 180
                }
              ],
              "variants": {
                "gif": {
                  "source": {
                    "url": "https://external-preview.redd.it/vtavzkmZ4j_Fhn4a31CKPBh6_4xDI7mJZeExWaDUxaI.gif?s=dac51c292d4ce1bf8068cb1e996344a1b87e127d",
                    "width": 444,
                    "height": 250
                  },
                  "resolutions": [
                    {
                      "url": "https://external-preview.redd.it/vtavzkmZ4j_Fhn4a31CKPBh6_4xDI7mJZeExWaDUxaI.gif?width=108&amp;crop=smart&amp;s=d44dd494076f48f173da11a52c01f0799997af57",
                      "width": 108,
                      "height": 60
                    },
                    {
                      "url": "https://external-preview.redd.it/vtavzkmZ4j_Fhn4a31CKPBh6_4xDI7mJZeExWaDUxaI.gif?width=216&amp;crop=smart&amp;s=3240ba1078bf2cdeb4ad4fce7ed0401bcd2c6292",
                      "width": 216,
                      "height": 121
                    },
                    {
                      "url": "https://external-preview.redd.it/vtavzkmZ4j_Fhn4a31CKPBh6_4xDI7mJZeExWaDUxaI.gif?width=320&amp;crop=smart&amp;s=a0d2c2a915007f64d45636630b2054414c0b6d54",
                      "width": 320,
                      "height": 180
                    }
                  ]
                },
                "mp4": {
                  "source": {
                    "url": "https://external-preview.redd.it/vtavzkmZ4j_Fhn4a31CKPBh6_4xDI7mJZeExWaDUxaI.gif?format=mp4&amp;s=70bb7e00c72188805ca5394aaa488a9e3c591c09",
                    "width": 444,
                    "height": 250
                  },
                  "resolutions": [
                    {
                      "url": "https://external-preview.redd.it/vtavzkmZ4j_Fhn4a31CKPBh6_4xDI7mJZeExWaDUxaI.gif?width=108&amp;format=mp4&amp;s=1431c088266ebd31bd35daa476144a326abc1b88",
                      "width": 108,
                      "height": 60
                    },
                    {
                      "url": "https://external-preview.redd.it/vtavzkmZ4j_Fhn4a31CKPBh6_4xDI7mJZeExWaDUxaI.gif?width=216&amp;format=mp4&amp;s=653717e8eaf26c60a8529f4ce74f893fd3046b8f",
                      "width": 216,
                      "height": 121
                    },
                    {
                      "url": "https://external-preview.redd.it/vtavzkmZ4j_Fhn4a31CKPBh6_4xDI7mJZeExWaDUxaI.gif?width=320&amp;format=mp4&amp;s=73c7dabef999911c25e1db3817a80e3630e7640a",
                      "width": 320,
                      "height": 180
                    }
                  ]
                }
              },
              "id": "i1pnQNILdjpVHL4fgX7anMmj4jXCrkdWN1esXM8hjoY"
            }
          ],
          "reddit_video_preview": {
            "fallback_url": "https://v.redd.it/62b33gae71z21/DASH_360",
            "height": 360,
            "width": 640,
            "scrubber_media_url": "https://v.redd.it/62b33gae71z21/DASH_96",
            "dash_url": "https://v.redd.it/62b33gae71z21/DASHPlaylist.mpd",
            "duration": 12,
            "hls_url": "https://v.redd.it/62b33gae71z21/HLSPlaylist.m3u8",
            "is_gif": true,
            "transcoding_status": "completed"
          },
          "enabled": true
        },
        "all_awardings": [],
        "media_only": false,
        "can_gild": false,
        "spoiler": false,
        "locked": false,
        "author_flair_text": ":lit:",
        "visited": false,
        "num_reports": null,
        "distinguished": null,
        "subreddit_id": "t5_3gdh7",
        "mod_reason_by": null,
        "removal_reason": null,
        "link_flair_background_color": "",
        "id": "bq5j19",
        "is_robot_indexable": true,
        "report_reasons": null,
        "author": "to_the_tenth_power",
        "num_crossposts": 14,
        "num_comments": 299,
        "send_replies": true,
        "whitelist_status": "all_ads",
        "contest_mode": false,
        "mod_reports": [],
        "author_patreon_flair": false,
        "author_flair_text_color": "dark",
        "permalink": "/r/NatureIsFuckingLit/comments/bq5j19/how_seals_move_on_land/",
        "parent_whitelist_status": "all_ads",
        "stickied": false,
        "url": "https://gfycat.com/ShallowSphericalHeifer",
        "subreddit_subscribers": 2215448,
        "created_utc": 1558195232,
        "media": {
          "type": "gfycat.com",
          "oembed": {
            "provider_url": "https://gfycat.com",
            "description": "Watch How seals move on land GIF on Gfycat. Discover more related GIFs on Gfycat",
            "title": "How seals move on land",
            "type": "video",
            "thumbnail_width": 444,
            "height": 338,
            "width": 600,
            "html": "&lt;iframe class=\"embedly-embed\" src=\"https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fgfycat.com%2Fifr%2Fshallowsphericalheifer&amp;url=https%3A%2F%2Fgfycat.com%2Fshallowsphericalheifer&amp;image=https%3A%2F%2Fthumbs.gfycat.com%2FShallowSphericalHeifer-size_restricted.gif&amp;key=ed8fa8699ce04833838e66ce79ba05f1&amp;type=text%2Fhtml&amp;schema=gfycat\" width=\"600\" height=\"338\" scrolling=\"no\" frameborder=\"0\" allow=\"autoplay; fullscreen\" allowfullscreen=\"true\"&gt;&lt;/iframe&gt;",
            "version": "1.0",
            "provider_name": "Gfycat",
            "thumbnail_url": "https://thumbs.gfycat.com/ShallowSphericalHeifer-size_restricted.gif",
            "thumbnail_height": 250
          }
        },
        "is_video": false
      }
    },
    {
      "kind": "t3",
      "data": {
        "approved_at_utc": null,
        "subreddit": "BikiniBottomTwitter",
        "selftext": "",
        "author_fullname": "t2_15v2ed",
        "saved": false,
        "mod_reason_title": null,
        "gilded": 0,
        "clicked": false,
        "title": "It really do be that way.",
        "link_flair_richtext": [],
        "subreddit_name_prefixed": "r/BikiniBottomTwitter",
        "hidden": false,
        "pwls": 6,
        "link_flair_css_class": null,
        "downs": 0,
        "thumbnail_height": 140,
        "hide_score": false,
        "name": "t3_bq5f3r",
        "quarantine": false,
        "link_flair_text_color": "dark",
        "author_flair_background_color": "",
        "subreddit_type": "public",
        "ups": 29345,
        "total_awards_received": 0,
        "media_embed": {},
        "thumbnail_width": 140,
        "author_flair_template_id": null,
        "is_original_content": false,
        "user_reports": [],
        "secure_media": null,
        "is_reddit_media_domain": true,
        "is_meta": false,
        "category": null,
        "secure_media_embed": {},
        "link_flair_text": null,
        "can_mod_post": false,
        "score": 29345,
        "approved_by": null,
        "thumbnail": "https://a.thumbs.redditmedia.com/9MVFScC6dimNbGuj5ZjuGmr9_6FHfKu4KxSEPugZAI0.jpg",
        "edited": false,
        "author_flair_css_class": "plankton",
        "author_flair_richtext": [],
        "gildings": {},
        "post_hint": "image",
        "content_categories": null,
        "is_self": false,
        "mod_note": null,
        "created": 1558223429,
        "link_flair_type": "text",
        "wls": 6,
        "banned_by": null,
        "author_flair_type": "text",
        "domain": "i.redd.it",
        "selftext_html": null,
        "likes": null,
        "suggested_sort": "top",
        "banned_at_utc": null,
        "view_count": null,
        "archived": false,
        "no_follow": false,
        "is_crosspostable": false,
        "pinned": false,
        "over_18": false,
        "preview": {
          "images": [
            {
              "source": {
                "url": "https://preview.redd.it/5njl78d4rzy21.jpg?auto=webp&amp;s=0d18845cbab5646ae7be9cbb465e8aa484209d93",
                "width": 750,
                "height": 1089
              },
              "resolutions": [
                {
                  "url": "https://preview.redd.it/5njl78d4rzy21.jpg?width=108&amp;crop=smart&amp;auto=webp&amp;s=86ff94807a7cd4cee83a5445e9eb51248349041d",
                  "width": 108,
                  "height": 156
                },
                {
                  "url": "https://preview.redd.it/5njl78d4rzy21.jpg?width=216&amp;crop=smart&amp;auto=webp&amp;s=3982c2a4efe128b7a8a590eeb596bddc5ca2746d",
                  "width": 216,
                  "height": 313
                },
                {
                  "url": "https://preview.redd.it/5njl78d4rzy21.jpg?width=320&amp;crop=smart&amp;auto=webp&amp;s=ece108ce39f65b15a19c262a644551733acfbb33",
                  "width": 320,
                  "height": 464
                },
                {
                  "url": "https://preview.redd.it/5njl78d4rzy21.jpg?width=640&amp;crop=smart&amp;auto=webp&amp;s=2c43d3e7325d15d5a02d6011ec07acf4df3c0be4",
                  "width": 640,
                  "height": 929
                }
              ],
              "variants": {},
              "id": "Uu0lGTwNjoOh2-87jol4tOfH63dJqsGB6vjm0Yv_kHk"
            }
          ],
          "enabled": true
        },
        "all_awardings": [],
        "media_only": false,
        "can_gild": false,
        "spoiler": false,
        "locked": false,
        "author_flair_text": null,
        "visited": false,
        "num_reports": null,
        "distinguished": null,
        "subreddit_id": "t5_3deqz",
        "mod_reason_by": null,
        "removal_reason": null,
        "link_flair_background_color": "",
        "id": "bq5f3r",
        "is_robot_indexable": true,
        "report_reasons": null,
        "author": "rjschwerin",
        "num_crossposts": 1,
        "num_comments": 141,
        "send_replies": true,
        "whitelist_status": "all_ads",
        "contest_mode": false,
        "mod_reports": [],
        "author_patreon_flair": false,
        "author_flair_text_color": "dark",
        "permalink": "/r/BikiniBottomTwitter/comments/bq5f3r/it_really_do_be_that_way/",
        "parent_whitelist_status": "all_ads",
        "stickied": false,
        "url": "https://i.redd.it/5njl78d4rzy21.jpg",
        "subreddit_subscribers": 1841735,
        "created_utc": 1558194629,
        "media": null,
        "is_video": false
      }
    },
    {
      "kind": "t3",
      "data": {
        "approved_at_utc": null,
        "subreddit": "trashy",
        "selftext": "",
        "author_fullname": "t2_xz1zb",
        "saved": false,
        "mod_reason_title": null,
        "gilded": 0,
        "clicked": false,
        "title": "My ex's kitchen. This is all trash.",
        "link_flair_richtext": [],
        "subreddit_name_prefixed": "r/trashy",
        "hidden": false,
        "pwls": 0,
        "link_flair_css_class": "photo",
        "downs": 0,
        "thumbnail_height": 74,
        "hide_score": false,
        "name": "t3_bq4zm5",
        "quarantine": false,
        "link_flair_text_color": "dark",
        "author_flair_background_color": null,
        "subreddit_type": "public",
        "ups": 22452,
        "total_awards_received": 0,
        "media_embed": {},
        "thumbnail_width": 140,
        "author_flair_template_id": null,
        "is_original_content": false,
        "user_reports": [],
        "secure_media": null,
        "is_reddit_media_domain": true,
        "is_meta": false,
        "category": null,
        "secure_media_embed": {},
        "link_flair_text": "Photo",
        "can_mod_post": false,
        "score": 22452,
        "approved_by": null,
        "thumbnail": "https://b.thumbs.redditmedia.com/3WTAWGK0jd_Kwixtvc6sIh7VrNPg_lhWlNxzgjN9vrg.jpg",
        "edited": false,
        "author_flair_css_class": null,
        "author_flair_richtext": [],
        "gildings": {},
        "post_hint": "image",
        "content_categories": null,
        "is_self": false,
        "mod_note": null,
        "created": 1558220996,
        "link_flair_type": "text",
        "wls": 0,
        "banned_by": null,
        "author_flair_type": "text",
        "domain": "i.redd.it",
        "selftext_html": null,
        "likes": null,
        "suggested_sort": null,
        "banned_at_utc": null,
        "view_count": null,
        "archived": false,
        "no_follow": false,
        "is_crosspostable": false,
        "pinned": false,
        "over_18": false,
        "preview": {
          "images": [
            {
              "source": {
                "url": "https://preview.redd.it/cchvgayvjzy21.jpg?auto=webp&amp;s=f0426a0cc121195306b12af3e8eabd17ad198826",
                "width": 2688,
                "height": 1427
              },
              "resolutions": [
                {
                  "url": "https://preview.redd.it/cchvgayvjzy21.jpg?width=108&amp;crop=smart&amp;auto=webp&amp;s=080913aa1e651140b273ec6c0d590a60560de532",
                  "width": 108,
                  "height": 57
                },
                {
                  "url": "https://preview.redd.it/cchvgayvjzy21.jpg?width=216&amp;crop=smart&amp;auto=webp&amp;s=4a16a4c75744b37f28d7537f5a0591b2f87d0b04",
                  "width": 216,
                  "height": 114
                },
                {
                  "url": "https://preview.redd.it/cchvgayvjzy21.jpg?width=320&amp;crop=smart&amp;auto=webp&amp;s=19cd1c0322f82a8e063d379917e28b252d09e198",
                  "width": 320,
                  "height": 169
                },
                {
                  "url": "https://preview.redd.it/cchvgayvjzy21.jpg?width=640&amp;crop=smart&amp;auto=webp&amp;s=03b06e0c070387197373cf961ec5ef6a3297a6ac",
                  "width": 640,
                  "height": 339
                },
                {
                  "url": "https://preview.redd.it/cchvgayvjzy21.jpg?width=960&amp;crop=smart&amp;auto=webp&amp;s=3befb3dcea1b35b20a5cef4e712e4c8f4d72d629",
                  "width": 960,
                  "height": 509
                },
                {
                  "url": "https://preview.redd.it/cchvgayvjzy21.jpg?width=1080&amp;crop=smart&amp;auto=webp&amp;s=399581e73c7aefa49317956c2a6f5cca3445a2f7",
                  "width": 1080,
                  "height": 573
                }
              ],
              "variants": {},
              "id": "x8ndQEslHRaGRcjKz7gfEUOsVbRIAPkzsLeVNTjEJxc"
            }
          ],
          "enabled": true
        },
        "all_awardings": [],
        "media_only": false,
        "can_gild": false,
        "spoiler": false,
        "locked": false,
        "author_flair_text": null,
        "visited": false,
        "num_reports": null,
        "distinguished": null,
        "subreddit_id": "t5_2uao3",
        "mod_reason_by": null,
        "removal_reason": null,
        "link_flair_background_color": "",
        "id": "bq4zm5",
        "is_robot_indexable": true,
        "report_reasons": null,
        "author": "emchard",
        "num_crossposts": 1,
        "num_comments": 1161,
        "send_replies": true,
        "whitelist_status": "no_ads",
        "contest_mode": false,
        "mod_reports": [],
        "author_patreon_flair": false,
        "author_flair_text_color": null,
        "permalink": "/r/trashy/comments/bq4zm5/my_exs_kitchen_this_is_all_trash/",
        "parent_whitelist_status": "no_ads",
        "stickied": false,
        "url": "https://i.redd.it/cchvgayvjzy21.jpg",
        "subreddit_subscribers": 1323753,
        "created_utc": 1558192196,
        "media": null,
        "is_video": false
      }
    },
    {
      "kind": "t3",
      "data": {
        "approved_at_utc": null,
        "subreddit": "freefolk",
        "selftext": "",
        "author_fullname": "t2_3kzxr8oq",
        "saved": false,
        "mod_reason_title": null,
        "gilded": 0,
        "clicked": false,
        "title": "900k freefolk on Sunday",
        "link_flair_richtext": [],
        "subreddit_name_prefixed": "r/freefolk",
        "hidden": false,
        "pwls": 6,
        "link_flair_css_class": null,
        "downs": 0,
        "thumbnail_height": 56,
        "hide_score": false,
        "name": "t3_bq4r8k",
        "quarantine": false,
        "link_flair_text_color": "dark",
        "author_flair_background_color": null,
        "subreddit_type": "public",
        "ups": 28321,
        "total_awards_received": 1,
        "media_embed": {},
        "thumbnail_width": 140,
        "author_flair_template_id": null,
        "is_original_content": false,
        "user_reports": [],
        "secure_media": null,
        "is_reddit_media_domain": true,
        "is_meta": false,
        "category": null,
        "secure_media_embed": {},
        "link_flair_text": null,
        "can_mod_post": false,
        "score": 28321,
        "approved_by": null,
        "thumbnail": "https://b.thumbs.redditmedia.com/AEOmO2e7UFIvJ2RdzcuvnZpui1bRQzhcyawc7QOSmbs.jpg",
        "edited": false,
        "author_flair_css_class": null,
        "author_flair_richtext": [],
        "gildings": {
          "gid_1": 1
        },
        "post_hint": "image",
        "content_categories": null,
        "is_self": false,
        "mod_note": null,
        "created": 1558219637,
        "link_flair_type": "text",
        "wls": 6,
        "banned_by": null,
        "author_flair_type": "text",
        "domain": "i.redd.it",
        "selftext_html": null,
        "likes": null,
        "suggested_sort": null,
        "banned_at_utc": null,
        "view_count": null,
        "archived": false,
        "no_follow": false,
        "is_crosspostable": false,
        "pinned": false,
        "over_18": false,
        "preview": {
          "images": [
            {
              "source": {
                "url": "https://preview.redd.it/7lqnagk6fzy21.png?auto=webp&amp;s=fe9522713bc3b8c979bb3b7e17d4689270129e34",
                "width": 875,
                "height": 353
              },
              "resolutions": [
                {
                  "url": "https://preview.redd.it/7lqnagk6fzy21.png?width=108&amp;crop=smart&amp;auto=webp&amp;s=ff201fe1c37ef357b3a8573e612dc0aeb8ae2839",
                  "width": 108,
                  "height": 43
                },
                {
                  "url": "https://preview.redd.it/7lqnagk6fzy21.png?width=216&amp;crop=smart&amp;auto=webp&amp;s=964d9ce24c7da43db4e7e048f51e79731a2980cf",
                  "width": 216,
                  "height": 87
                },
                {
                  "url": "https://preview.redd.it/7lqnagk6fzy21.png?width=320&amp;crop=smart&amp;auto=webp&amp;s=0789c6f424e86c8bdf1b5a2a8086c183e1d8076d",
                  "width": 320,
                  "height": 129
                },
                {
                  "url": "https://preview.redd.it/7lqnagk6fzy21.png?width=640&amp;crop=smart&amp;auto=webp&amp;s=263f35403da48fe6d028edd242a28a7de3db149c",
                  "width": 640,
                  "height": 258
                }
              ],
              "variants": {},
              "id": "gvKBZIYoynU91wOHv1tiVs9tXj2S5t6pyRE3kQ7cEdQ"
            }
          ],
          "enabled": true
        },
        "all_awardings": [
          {
            "is_enabled": true,
            "count": 1,
            "subreddit_id": null,
            "description": "Silver Award",
            "coin_reward": 0,
            "icon_width": 512,
            "icon_url": "https://www.redditstatic.com/gold/awards/icon/silver_512.png",
            "days_of_premium": 0,
            "icon_height": 512,
            "resized_icons": [
              {
                "url": "https://www.redditstatic.com/gold/awards/icon/silver_16.png",
                "width": 16,
                "height": 16
              },
              {
                "url": "https://www.redditstatic.com/gold/awards/icon/silver_32.png",
                "width": 32,
                "height": 32
              },
              {
                "url": "https://www.redditstatic.com/gold/awards/icon/silver_48.png",
                "width": 48,
                "height": 48
              },
              {
                "url": "https://www.redditstatic.com/gold/awards/icon/silver_64.png",
                "width": 64,
                "height": 64
              },
              {
                "url": "https://www.redditstatic.com/gold/awards/icon/silver_128.png",
                "width": 128,
                "height": 128
              }
            ],
            "days_of_drip_extension": 0,
            "award_type": "global",
            "coin_price": 100,
            "id": "gid_1",
            "name": "Silver"
          }
        ],
        "media_only": false,
        "can_gild": false,
        "spoiler": false,
        "locked": false,
        "author_flair_text": null,
        "visited": false,
        "num_reports": null,
        "distinguished": null,
        "subreddit_id": "t5_37tpy",
        "mod_reason_by": null,
        "removal_reason": null,
        "link_flair_background_color": "",
        "id": "bq4r8k",
        "is_robot_indexable": true,
        "report_reasons": null,
        "author": "Legal_Sugar",
        "num_crossposts": 0,
        "num_comments": 635,
        "send_replies": true,
        "whitelist_status": "all_ads",
        "contest_mode": false,
        "mod_reports": [],
        "author_patreon_flair": false,
        "author_flair_text_color": null,
        "permalink": "/r/freefolk/comments/bq4r8k/900k_freefolk_on_sunday/",
        "parent_whitelist_status": "all_ads",
        "stickied": false,
        "url": "https://i.redd.it/7lqnagk6fzy21.png",
        "subreddit_subscribers": 908883,
        "created_utc": 1558190837,
        "media": null,
        "is_video": false
      }
    },
    {
      "kind": "t3",
      "data": {
        "approved_at_utc": null,
        "subreddit": "creepy",
        "selftext": "",
        "author_fullname": "t2_b5po2k",
        "saved": false,
        "mod_reason_title": null,
        "gilded": 0,
        "clicked": false,
        "title": "Frozen Horses",
        "link_flair_richtext": [],
        "subreddit_name_prefixed": "r/creepy",
        "hidden": false,
        "pwls": 6,
        "link_flair_css_class": null,
        "downs": 0,
        "thumbnail_height": 96,
        "hide_score": false,
        "name": "t3_bq5s9r",
        "quarantine": false,
        "link_flair_text_color": "dark",
        "author_flair_background_color": null,
        "subreddit_type": "public",
        "ups": 8561,
        "total_awards_received": 0,
        "media_embed": {},
        "thumbnail_width": 140,
        "author_flair_template_id": null,
        "is_original_content": false,
        "user_reports": [],
        "secure_media": null,
        "is_reddit_media_domain": true,
        "is_meta": false,
        "category": null,
        "secure_media_embed": {},
        "link_flair_text": null,
        "can_mod_post": false,
        "score": 8561,
        "approved_by": null,
        "thumbnail": "nsfw",
        "edited": false,
        "author_flair_css_class": null,
        "author_flair_richtext": [],
        "gildings": {},
        "post_hint": "image",
        "content_categories": null,
        "is_self": false,
        "mod_note": null,
        "created": 1558225457,
        "link_flair_type": "text",
        "wls": 3,
        "banned_by": null,
        "author_flair_type": "text",
        "domain": "i.redd.it",
        "selftext_html": null,
        "likes": null,
        "suggested_sort": "top",
        "banned_at_utc": null,
        "view_count": null,
        "archived": false,
        "no_follow": false,
        "is_crosspostable": false,
        "pinned": false,
        "over_18": true,
        "preview": {
          "images": [
            {
              "source": {
                "url": "https://preview.redd.it/m694xoh5xzy21.jpg?auto=webp&amp;s=8c56846547c93e12016d7809ceb596cad79f3118",
                "width": 750,
                "height": 518
              },
              "resolutions": [
                {
                  "url": "https://preview.redd.it/m694xoh5xzy21.jpg?width=108&amp;crop=smart&amp;auto=webp&amp;s=e170b2c96bc8beb95cbd4ef235ffa6d096348baf",
                  "width": 108,
                  "height": 74
                },
                {
                  "url": "https://preview.redd.it/m694xoh5xzy21.jpg?width=216&amp;crop=smart&amp;auto=webp&amp;s=89c19f5914e507c32dc022dc06349e2cb08b2364",
                  "width": 216,
                  "height": 149
                },
                {
                  "url": "https://preview.redd.it/m694xoh5xzy21.jpg?width=320&amp;crop=smart&amp;auto=webp&amp;s=9e630b00b48322242845e1e4d39bdc028b13118f",
                  "width": 320,
                  "height": 221
                },
                {
                  "url": "https://preview.redd.it/m694xoh5xzy21.jpg?width=640&amp;crop=smart&amp;auto=webp&amp;s=4ba64a0132735bd064f2c102c5fc322aab859e18",
                  "width": 640,
                  "height": 442
                }
              ],
              "variants": {
                "obfuscated": {
                  "source": {
                    "url": "https://preview.redd.it/m694xoh5xzy21.jpg?blur=40&amp;format=pjpg&amp;auto=webp&amp;s=4cdd6b5aae83da88753edb70d85f1bd33145293d",
                    "width": 750,
                    "height": 518
                  },
                  "resolutions": [
                    {
                      "url": "https://preview.redd.it/m694xoh5xzy21.jpg?width=108&amp;crop=smart&amp;blur=10&amp;format=pjpg&amp;auto=webp&amp;s=35aa5333b80fb296d27d08dc0cf1c3758ae22c8b",
                      "width": 108,
                      "height": 74
                    },
                    {
                      "url": "https://preview.redd.it/m694xoh5xzy21.jpg?width=216&amp;crop=smart&amp;blur=21&amp;format=pjpg&amp;auto=webp&amp;s=daa5e3e23b92de9ce4293031b4d9770574ca5a0a",
                      "width": 216,
                      "height": 149
                    },
                    {
                      "url": "https://preview.redd.it/m694xoh5xzy21.jpg?width=320&amp;crop=smart&amp;blur=32&amp;format=pjpg&amp;auto=webp&amp;s=26192e56bea3bb0623c6161fe0e04ba0e928981d",
                      "width": 320,
                      "height": 221
                    },
                    {
                      "url": "https://preview.redd.it/m694xoh5xzy21.jpg?width=640&amp;crop=smart&amp;blur=40&amp;format=pjpg&amp;auto=webp&amp;s=e0c67e91f8a7cdc4676857f84780a1c3c0a7c17f",
                      "width": 640,
                      "height": 442
                    }
                  ]
                },
                "nsfw": {
                  "source": {
                    "url": "https://preview.redd.it/m694xoh5xzy21.jpg?blur=40&amp;format=pjpg&amp;auto=webp&amp;s=4cdd6b5aae83da88753edb70d85f1bd33145293d",
                    "width": 750,
                    "height": 518
                  },
                  "resolutions": [
                    {
                      "url": "https://preview.redd.it/m694xoh5xzy21.jpg?width=108&amp;crop=smart&amp;blur=10&amp;format=pjpg&amp;auto=webp&amp;s=35aa5333b80fb296d27d08dc0cf1c3758ae22c8b",
                      "width": 108,
                      "height": 74
                    },
                    {
                      "url": "https://preview.redd.it/m694xoh5xzy21.jpg?width=216&amp;crop=smart&amp;blur=21&amp;format=pjpg&amp;auto=webp&amp;s=daa5e3e23b92de9ce4293031b4d9770574ca5a0a",
                      "width": 216,
                      "height": 149
                    },
                    {
                      "url": "https://preview.redd.it/m694xoh5xzy21.jpg?width=320&amp;crop=smart&amp;blur=32&amp;format=pjpg&amp;auto=webp&amp;s=26192e56bea3bb0623c6161fe0e04ba0e928981d",
                      "width": 320,
                      "height": 221
                    },
                    {
                      "url": "https://preview.redd.it/m694xoh5xzy21.jpg?width=640&amp;crop=smart&amp;blur=40&amp;format=pjpg&amp;auto=webp&amp;s=e0c67e91f8a7cdc4676857f84780a1c3c0a7c17f",
                      "width": 640,
                      "height": 442
                    }
                  ]
                }
              },
              "id": "vfW60YJt4FKLzHVDE5kpVMm_BhlwWSMsN9cdAba0qXM"
            }
          ],
          "enabled": true
        },
        "all_awardings": [],
        "media_only": false,
        "can_gild": false,
        "spoiler": false,
        "locked": false,
        "author_flair_text": null,
        "visited": false,
        "num_reports": null,
        "distinguished": null,
        "subreddit_id": "t5_2raed",
        "mod_reason_by": null,
        "removal_reason": null,
        "link_flair_background_color": "",
        "id": "bq5s9r",
        "is_robot_indexable": true,
        "report_reasons": null,
        "author": "skidad_skadod",
        "num_crossposts": 1,
        "num_comments": 349,
        "send_replies": true,
        "whitelist_status": "promo_adult_nsfw",
        "contest_mode": false,
        "mod_reports": [],
        "author_patreon_flair": false,
        "author_flair_text_color": null,
        "permalink": "/r/creepy/comments/bq5s9r/frozen_horses/",
        "parent_whitelist_status": "all_ads",
        "stickied": false,
        "url": "https://i.redd.it/m694xoh5xzy21.jpg",
        "subreddit_subscribers": 12963224,
        "created_utc": 1558196657,
        "media": null,
        "is_video": false
      }
    },
    {
      "kind": "t3",
      "data": {
        "approved_at_utc": null,
        "subreddit": "PewdiepieSubmissions",
        "selftext": "",
        "author_fullname": "t2_1y66e0jn",
        "saved": false,
        "mod_reason_title": null,
        "gilded": 0,
        "clicked": false,
        "title": "And that's a fact",
        "link_flair_richtext": [],
        "subreddit_name_prefixed": "r/PewdiepieSubmissions",
        "hidden": false,
        "pwls": 0,
        "link_flair_css_class": null,
        "downs": 0,
        "thumbnail_height": 140,
        "hide_score": false,
        "name": "t3_bq6mjf",
        "quarantine": false,
        "link_flair_text_color": "dark",
        "author_flair_background_color": null,
        "subreddit_type": "public",
        "ups": 16955,
        "total_awards_received": 0,
        "media_embed": {},
        "thumbnail_width": 140,
        "author_flair_template_id": null,
        "is_original_content": false,
        "user_reports": [],
        "secure_media": null,
        "is_reddit_media_domain": true,
        "is_meta": false,
        "category": null,
        "secure_media_embed": {},
        "link_flair_text": null,
        "can_mod_post": false,
        "score": 16955,
        "approved_by": null,
        "thumbnail": "https://a.thumbs.redditmedia.com/4JOgccDSqgtc4YAJ6fKhFL4p9fce3UaC0aZAOxBK1U4.jpg",
        "edited": false,
        "author_flair_css_class": null,
        "author_flair_richtext": [],
        "gildings": {},
        "post_hint": "image",
        "content_categories": null,
        "is_self": false,
        "mod_note": null,
        "created": 1558230114,
        "link_flair_type": "text",
        "wls": 0,
        "banned_by": null,
        "author_flair_type": "text",
        "domain": "i.redd.it",
        "selftext_html": null,
        "likes": null,
        "suggested_sort": "top",
        "banned_at_utc": null,
        "view_count": null,
        "archived": false,
        "no_follow": false,
        "is_crosspostable": false,
        "pinned": false,
        "over_18": false,
        "preview": {
          "images": [
            {
              "source": {
                "url": "https://preview.redd.it/3aeevzuxa0z21.jpg?auto=webp&amp;s=befb3bad22a67882fb9ffb00baf6001ca3c35894",
                "width": 500,
                "height": 700
              },
              "resolutions": [
                {
                  "url": "https://preview.redd.it/3aeevzuxa0z21.jpg?width=108&amp;crop=smart&amp;auto=webp&amp;s=307f800ba86625550357bf75d95fa42e3e0a68ec",
                  "width": 108,
                  "height": 151
                },
                {
                  "url": "https://preview.redd.it/3aeevzuxa0z21.jpg?width=216&amp;crop=smart&amp;auto=webp&amp;s=fdab4129def5db08b832f1a59b3f2a576dd3f10e",
                  "width": 216,
                  "height": 302
                },
                {
                  "url": "https://preview.redd.it/3aeevzuxa0z21.jpg?width=320&amp;crop=smart&amp;auto=webp&amp;s=c1b3d36cf2c696c37a0051c41986f5195f83fdea",
                  "width": 320,
                  "height": 448
                }
              ],
              "variants": {},
              "id": "bye5perEOMBEnY7zwLKoQg6X2CQDYXKreS3slh5i6XA"
            }
          ],
          "enabled": true
        },
        "all_awardings": [],
        "media_only": false,
        "can_gild": false,
        "spoiler": false,
        "locked": false,
        "author_flair_text": null,
        "visited": false,
        "num_reports": null,
        "distinguished": null,
        "subreddit_id": "t5_3m0tc",
        "mod_reason_by": null,
        "removal_reason": null,
        "link_flair_background_color": "",
        "id": "bq6mjf",
        "is_robot_indexable": true,
        "report_reasons": null,
        "author": "Tobi_1989",
        "num_crossposts": 1,
        "num_comments": 220,
        "send_replies": true,
        "whitelist_status": "no_ads",
        "contest_mode": false,
        "mod_reports": [],
        "author_patreon_flair": false,
        "author_flair_text_color": null,
        "permalink": "/r/PewdiepieSubmissions/comments/bq6mjf/and_thats_a_fact/",
        "parent_whitelist_status": "no_ads",
        "stickied": false,
        "url": "https://i.redd.it/3aeevzuxa0z21.jpg",
        "subreddit_subscribers": 1552729,
        "created_utc": 1558201314,
        "media": null,
        "is_video": false
      }
    },
    {
      "kind": "t3",
      "data": {
        "approved_at_utc": null,
        "subreddit": "soccer",
        "selftext": "",
        "author_fullname": "t2_hlcwr",
        "saved": false,
        "mod_reason_title": null,
        "gilded": 0,
        "clicked": false,
        "title": "Kovac didn't see Robben coming",
        "link_flair_richtext": [
          {
            "e": "text",
            "t": "Media"
          }
        ],
        "subreddit_name_prefixed": "r/soccer",
        "hidden": false,
        "pwls": 6,
        "link_flair_css_class": "media",
        "downs": 0,
        "thumbnail_height": 78,
        "hide_score": false,
        "name": "t3_bq5pyt",
        "quarantine": false,
        "link_flair_text_color": "light",
        "author_flair_background_color": null,
        "subreddit_type": "public",
        "ups": 7465,
        "total_awards_received": 0,
        "media_embed": {
          "content": "&lt;iframe class=\"embedly-embed\" src=\"https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fgfycat.com%2Fifr%2Fdaringtastyangelwingmussel&amp;url=https%3A%2F%2Fgfycat.com%2Fdaringtastyangelwingmussel&amp;image=https%3A%2F%2Fthumbs.gfycat.com%2FDaringTastyAngelwingmussel-size_restricted.gif&amp;key=ed8fa8699ce04833838e66ce79ba05f1&amp;type=text%2Fhtml&amp;schema=gfycat\" width=\"600\" height=\"338\" scrolling=\"no\" frameborder=\"0\" allow=\"autoplay; fullscreen\" allowfullscreen=\"true\"&gt;&lt;/iframe&gt;",
          "width": 600,
          "scrolling": false,
          "height": 338
        },
        "thumbnail_width": 140,
        "author_flair_template_id": null,
        "is_original_content": false,
        "user_reports": [],
        "secure_media": {
          "type": "gfycat.com",
          "oembed": {
            "provider_url": "https://gfycat.com",
            "description": "Watch @ArjenRobben GIF on Gfycat. Discover more related GIFs on Gfycat",
            "title": "@ArjenRobben",
            "type": "video",
            "thumbnail_width": 444,
            "height": 338,
            "width": 600,
            "html": "&lt;iframe class=\"embedly-embed\" src=\"https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fgfycat.com%2Fifr%2Fdaringtastyangelwingmussel&amp;url=https%3A%2F%2Fgfycat.com%2Fdaringtastyangelwingmussel&amp;image=https%3A%2F%2Fthumbs.gfycat.com%2FDaringTastyAngelwingmussel-size_restricted.gif&amp;key=ed8fa8699ce04833838e66ce79ba05f1&amp;type=text%2Fhtml&amp;schema=gfycat\" width=\"600\" height=\"338\" scrolling=\"no\" frameborder=\"0\" allow=\"autoplay; fullscreen\" allowfullscreen=\"true\"&gt;&lt;/iframe&gt;",
            "version": "1.0",
            "provider_name": "Gfycat",
            "thumbnail_url": "https://thumbs.gfycat.com/DaringTastyAngelwingmussel-size_restricted.gif",
            "thumbnail_height": 250
          }
        },
        "is_reddit_media_domain": false,
        "is_meta": false,
        "category": null,
        "secure_media_embed": {
          "content": "&lt;iframe class=\"embedly-embed\" src=\"https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fgfycat.com%2Fifr%2Fdaringtastyangelwingmussel&amp;url=https%3A%2F%2Fgfycat.com%2Fdaringtastyangelwingmussel&amp;image=https%3A%2F%2Fthumbs.gfycat.com%2FDaringTastyAngelwingmussel-size_restricted.gif&amp;key=ed8fa8699ce04833838e66ce79ba05f1&amp;type=text%2Fhtml&amp;schema=gfycat\" width=\"600\" height=\"338\" scrolling=\"no\" frameborder=\"0\" allow=\"autoplay; fullscreen\" allowfullscreen=\"true\"&gt;&lt;/iframe&gt;",
          "width": 600,
          "scrolling": false,
          "media_domain_url": "https://www.redditmedia.com/mediaembed/bq5pyt",
          "height": 338
        },
        "link_flair_text": "Media",
        "can_mod_post": false,
        "score": 7465,
        "approved_by": null,
        "thumbnail": "image",
        "edited": false,
        "author_flair_css_class": null,
        "author_flair_richtext": [],
        "gildings": {},
        "post_hint": "rich:video",
        "content_categories": null,
        "is_self": false,
        "mod_note": null,
        "created": 1558225102,
        "link_flair_type": "richtext",
        "wls": 6,
        "banned_by": null,
        "author_flair_type": "text",
        "domain": "gfycat.com",
        "selftext_html": null,
        "likes": null,
        "suggested_sort": null,
        "banned_at_utc": null,
        "view_count": null,
        "archived": false,
        "no_follow": false,
        "is_crosspostable": false,
        "pinned": false,
        "over_18": false,
        "preview": {
          "images": [
            {
              "source": {
                "url": "https://external-preview.redd.it/4EN-84RQuK0ceRJnrh4opFMbWxbME8UjfyksUSlyRe4.gif?format=png8&amp;s=fe80cb3b41310e289b8a5588ce8a59be2688a3a2",
                "width": 444,
                "height": 250
              },
              "resolutions": [
                {
                  "url": "https://external-preview.redd.it/4EN-84RQuK0ceRJnrh4opFMbWxbME8UjfyksUSlyRe4.gif?width=108&amp;crop=smart&amp;format=png8&amp;s=b24e40fa66f5a6d641294af1ee784fba1dd2ba76",
                  "width": 108,
                  "height": 60
                },
                {
                  "url": "https://external-preview.redd.it/4EN-84RQuK0ceRJnrh4opFMbWxbME8UjfyksUSlyRe4.gif?width=216&amp;crop=smart&amp;format=png8&amp;s=9efac3f9d77cc091cd8d1dec17dd1bc8f3e5dd70",
                  "width": 216,
                  "height": 121
                },
                {
                  "url": "https://external-preview.redd.it/4EN-84RQuK0ceRJnrh4opFMbWxbME8UjfyksUSlyRe4.gif?width=320&amp;crop=smart&amp;format=png8&amp;s=27890506c8650523ef98ded95364b41db6e4f2a6",
                  "width": 320,
                  "height": 180
                }
              ],
              "variants": {
                "gif": {
                  "source": {
                    "url": "https://external-preview.redd.it/4EN-84RQuK0ceRJnrh4opFMbWxbME8UjfyksUSlyRe4.gif?s=d266bc888f12dcbd0de758a81fbbd7826f59b670",
                    "width": 444,
                    "height": 250
                  },
                  "resolutions": [
                    {
                      "url": "https://external-preview.redd.it/4EN-84RQuK0ceRJnrh4opFMbWxbME8UjfyksUSlyRe4.gif?width=108&amp;crop=smart&amp;s=c25ca4a1de1823199b69c31cff11c5739249c5cb",
                      "width": 108,
                      "height": 60
                    },
                    {
                      "url": "https://external-preview.redd.it/4EN-84RQuK0ceRJnrh4opFMbWxbME8UjfyksUSlyRe4.gif?width=216&amp;crop=smart&amp;s=4c1732b5d102def6dd0ea3a32f4aa720247460f5",
                      "width": 216,
                      "height": 121
                    },
                    {
                      "url": "https://external-preview.redd.it/4EN-84RQuK0ceRJnrh4opFMbWxbME8UjfyksUSlyRe4.gif?width=320&amp;crop=smart&amp;s=5b70af43955b6abc8295df4f75da803be310524f",
                      "width": 320,
                      "height": 180
                    }
                  ]
                },
                "mp4": {
                  "source": {
                    "url": "https://external-preview.redd.it/4EN-84RQuK0ceRJnrh4opFMbWxbME8UjfyksUSlyRe4.gif?format=mp4&amp;s=c350c10e047e2ee07134d1d530703c09e30c8797",
                    "width": 444,
                    "height": 250
                  },
                  "resolutions": [
                    {
                      "url": "https://external-preview.redd.it/4EN-84RQuK0ceRJnrh4opFMbWxbME8UjfyksUSlyRe4.gif?width=108&amp;format=mp4&amp;s=a263e6050da638f31257e89cd6d4df8a667f7da9",
                      "width": 108,
                      "height": 60
                    },
                    {
                      "url": "https://external-preview.redd.it/4EN-84RQuK0ceRJnrh4opFMbWxbME8UjfyksUSlyRe4.gif?width=216&amp;format=mp4&amp;s=886ec1b55d9a2d9bbc9bd5ed3441212417df5b85",
                      "width": 216,
                      "height": 121
                    },
                    {
                      "url": "https://external-preview.redd.it/4EN-84RQuK0ceRJnrh4opFMbWxbME8UjfyksUSlyRe4.gif?width=320&amp;format=mp4&amp;s=9cd4a26599409f8af65f2583540010c3915dadda",
                      "width": 320,
                      "height": 180
                    }
                  ]
                }
              },
              "id": "Bf-pVta60RFPjRK7So07iO1W14wQ5vV-n4FWgG6j4eA"
            }
          ],
          "reddit_video_preview": {
            "fallback_url": "https://v.redd.it/o6oz74t3wzy21/DASH_360",
            "height": 360,
            "width": 640,
            "scrubber_media_url": "https://v.redd.it/o6oz74t3wzy21/DASH_96",
            "dash_url": "https://v.redd.it/o6oz74t3wzy21/DASHPlaylist.mpd",
            "duration": 11,
            "hls_url": "https://v.redd.it/o6oz74t3wzy21/HLSPlaylist.m3u8",
            "is_gif": true,
            "transcoding_status": "completed"
          },
          "enabled": true
        },
        "all_awardings": [],
        "media_only": false,
        "link_flair_template_id": "8a1f9432-d807-11e5-a837-0e946f872575",
        "can_gild": false,
        "spoiler": false,
        "locked": false,
        "author_flair_text": null,
        "visited": false,
        "num_reports": null,
        "distinguished": null,
        "subreddit_id": "t5_2qi58",
        "mod_reason_by": null,
        "removal_reason": null,
        "link_flair_background_color": "#0079d3",
        "id": "bq5pyt",
        "is_robot_indexable": true,
        "report_reasons": null,
        "author": "josbez",
        "num_crossposts": 5,
        "num_comments": 312,
        "send_replies": true,
        "whitelist_status": "all_ads",
        "contest_mode": false,
        "mod_reports": [],
        "author_patreon_flair": false,
        "author_flair_text_color": null,
        "permalink": "/r/soccer/comments/bq5pyt/kovac_didnt_see_robben_coming/",
        "parent_whitelist_status": "all_ads",
        "stickied": false,
        "url": "https://gfycat.com/DaringTastyAngelwingmussel",
        "subreddit_subscribers": 1478184,
        "created_utc": 1558196302,
        "media": {
          "type": "gfycat.com",
          "oembed": {
            "provider_url": "https://gfycat.com",
            "description": "Watch @ArjenRobben GIF on Gfycat. Discover more related GIFs on Gfycat",
            "title": "@ArjenRobben",
            "type": "video",
            "thumbnail_width": 444,
            "height": 338,
            "width": 600,
            "html": "&lt;iframe class=\"embedly-embed\" src=\"https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fgfycat.com%2Fifr%2Fdaringtastyangelwingmussel&amp;url=https%3A%2F%2Fgfycat.com%2Fdaringtastyangelwingmussel&amp;image=https%3A%2F%2Fthumbs.gfycat.com%2FDaringTastyAngelwingmussel-size_restricted.gif&amp;key=ed8fa8699ce04833838e66ce79ba05f1&amp;type=text%2Fhtml&amp;schema=gfycat\" width=\"600\" height=\"338\" scrolling=\"no\" frameborder=\"0\" allow=\"autoplay; fullscreen\" allowfullscreen=\"true\"&gt;&lt;/iframe&gt;",
            "version": "1.0",
            "provider_name": "Gfycat",
            "thumbnail_url": "https://thumbs.gfycat.com/DaringTastyAngelwingmussel-size_restricted.gif",
            "thumbnail_height": 250
          }
        },
        "is_video": false
      }
    },
    {
      "kind": "t3",
      "data": {
        "approved_at_utc": null,
        "subreddit": "wholesomebpt",
        "selftext": "",
        "author_fullname": "t2_m2rzy",
        "saved": false,
        "mod_reason_title": null,
        "gilded": 0,
        "clicked": false,
        "title": "Congratulations to these fine young women.",
        "link_flair_richtext": [],
        "subreddit_name_prefixed": "r/wholesomebpt",
        "hidden": false,
        "pwls": 6,
        "link_flair_css_class": "",
        "downs": 0,
        "thumbnail_height": 140,
        "hide_score": false,
        "name": "t3_bq5izw",
        "quarantine": false,
        "link_flair_text_color": "dark",
        "author_flair_background_color": null,
        "subreddit_type": "public",
        "ups": 11224,
        "total_awards_received": 0,
        "media_embed": {},
        "thumbnail_width": 140,
        "author_flair_template_id": null,
        "is_original_content": false,
        "user_reports": [],
        "secure_media": null,
        "is_reddit_media_domain": true,
        "is_meta": false,
        "category": null,
        "secure_media_embed": {},
        "link_flair_text": "Nice post",
        "can_mod_post": false,
        "score": 11224,
        "approved_by": null,
        "thumbnail": "https://a.thumbs.redditmedia.com/PdJWq7Jd2fvuqmcdKNTVYQOz0SuZCToi4m4OtxOqvK0.jpg",
        "edited": false,
        "author_flair_css_class": null,
        "author_flair_richtext": [],
        "gildings": {},
        "post_hint": "image",
        "content_categories": null,
        "is_self": false,
        "mod_note": null,
        "created": 1558224027,
        "link_flair_type": "text",
        "wls": 6,
        "banned_by": null,
        "author_flair_type": "text",
        "domain": "i.redd.it",
        "selftext_html": null,
        "likes": null,
        "suggested_sort": null,
        "banned_at_utc": null,
        "view_count": null,
        "archived": false,
        "no_follow": false,
        "is_crosspostable": false,
        "pinned": false,
        "over_18": false,
        "preview": {
          "images": [
            {
              "source": {
                "url": "https://preview.redd.it/mai898bwszy21.jpg?auto=webp&amp;s=f767496de5549172ee8b9a937539bec305b9579f",
                "width": 750,
                "height": 1334
              },
              "resolutions": [
                {
                  "url": "https://preview.redd.it/mai898bwszy21.jpg?width=108&amp;crop=smart&amp;auto=webp&amp;s=9ee83cda578b1997309026740635505b8eba63d2",
                  "width": 108,
                  "height": 192
                },
                {
                  "url": "https://preview.redd.it/mai898bwszy21.jpg?width=216&amp;crop=smart&amp;auto=webp&amp;s=3d6061f1141b178b2b9cd6083056738421b8de84",
                  "width": 216,
                  "height": 384
                },
                {
                  "url": "https://preview.redd.it/mai898bwszy21.jpg?width=320&amp;crop=smart&amp;auto=webp&amp;s=b6029b600385e30ee57de12c5ea2111f2b7d1cc0",
                  "width": 320,
                  "height": 569
                },
                {
                  "url": "https://preview.redd.it/mai898bwszy21.jpg?width=640&amp;crop=smart&amp;auto=webp&amp;s=369ba2ee84e2707cae14a79e7e355591190860e0",
                  "width": 640,
                  "height": 1138
                }
              ],
              "variants": {},
              "id": "Crw2VBozYzqJ86n3zDXUJrGSfQNsmGjOtPv8kFDSB4I"
            }
          ],
          "enabled": true
        },
        "all_awardings": [],
        "media_only": false,
        "link_flair_template_id": "767bc69c-deb1-11e6-af8a-0e6a6ca638e8",
        "can_gild": false,
        "spoiler": false,
        "locked": true,
        "author_flair_text": null,
        "visited": false,
        "num_reports": null,
        "distinguished": null,
        "subreddit_id": "t5_3i70v",
        "mod_reason_by": null,
        "removal_reason": null,
        "link_flair_background_color": "",
        "id": "bq5izw",
        "is_robot_indexable": true,
        "report_reasons": null,
        "author": "hootersbutwithcats",
        "num_crossposts": 3,
        "num_comments": 156,
        "send_replies": true,
        "whitelist_status": "all_ads",
        "contest_mode": false,
        "mod_reports": [],
        "author_patreon_flair": false,
        "author_flair_text_color": null,
        "permalink": "/r/wholesomebpt/comments/bq5izw/congratulations_to_these_fine_young_women/",
        "parent_whitelist_status": "all_ads",
        "stickied": false,
        "url": "https://i.redd.it/mai898bwszy21.jpg",
        "subreddit_subscribers": 281126,
        "created_utc": 1558195227,
        "media": null,
        "is_video": false
      }
    },
    {
      "kind": "t3",
      "data": {
        "approved_at_utc": null,
        "subreddit": "instantkarma",
        "selftext": "",
        "author_fullname": "t2_10r6bs",
        "saved": false,
        "mod_reason_title": null,
        "gilded": 1,
        "clicked": false,
        "title": "Pretty instant karma.",
        "link_flair_richtext": [],
        "subreddit_name_prefixed": "r/instantkarma",
        "hidden": false,
        "pwls": 6,
        "link_flair_css_class": "brown",
        "downs": 0,
        "thumbnail_height": 140,
        "hide_score": false,
        "name": "t3_bq4vvg",
        "quarantine": false,
        "link_flair_text_color": "dark",
        "author_flair_background_color": null,
        "subreddit_type": "public",
        "ups": 34656,
        "total_awards_received": 3,
        "media_embed": {},
        "thumbnail_width": 140,
        "author_flair_template_id": null,
        "is_original_content": false,
        "user_reports": [],
        "secure_media": null,
        "is_reddit_media_domain": true,
        "is_meta": false,
        "category": null,
        "secure_media_embed": {},
        "link_flair_text": "Repost :(",
        "can_mod_post": false,
        "score": 34656,
        "approved_by": null,
        "thumbnail": "https://b.thumbs.redditmedia.com/oVBM6Crndj2jo_UlYF7T3x5SkNiPvhiSMmzhz5aj2TU.jpg",
        "edited": false,
        "author_flair_css_class": null,
        "author_flair_richtext": [],
        "gildings": {
          "gid_1": 2,
          "gid_2": 1
        },
        "post_hint": "image",
        "content_categories": null,
        "is_self": false,
        "mod_note": null,
        "created": 1558220412,
        "link_flair_type": "text",
        "wls": 6,
        "banned_by": null,
        "author_flair_type": "text",
        "domain": "i.redd.it",
        "selftext_html": null,
        "likes": null,
        "suggested_sort": null,
        "banned_at_utc": null,
        "view_count": null,
        "archived": false,
        "no_follow": false,
        "is_crosspostable": false,
        "pinned": false,
        "over_18": false,
        "preview": {
          "images": [
            {
              "source": {
                "url": "https://preview.redd.it/hc6pqjd5izy21.jpg?auto=webp&amp;s=f5c456b35aeb18886c92b02eb8906efda16c43df",
                "width": 1242,
                "height": 2208
              },
              "resolutions": [
                {
                  "url": "https://preview.redd.it/hc6pqjd5izy21.jpg?width=108&amp;crop=smart&amp;auto=webp&amp;s=bd654c6762333647a77c7d84baf730334f3164a4",
                  "width": 108,
                  "height": 192
                },
                {
                  "url": "https://preview.redd.it/hc6pqjd5izy21.jpg?width=216&amp;crop=smart&amp;auto=webp&amp;s=446f45d4bcba738f5255d70b6cda65084df70414",
                  "width": 216,
                  "height": 384
                },
                {
                  "url": "https://preview.redd.it/hc6pqjd5izy21.jpg?width=320&amp;crop=smart&amp;auto=webp&amp;s=69917381a9935b8604bb18535981a48b25a7add5",
                  "width": 320,
                  "height": 568
                },
                {
                  "url": "https://preview.redd.it/hc6pqjd5izy21.jpg?width=640&amp;crop=smart&amp;auto=webp&amp;s=84200858cdfe4905f08033244da39605fbcbdace",
                  "width": 640,
                  "height": 1137
                },
                {
                  "url": "https://preview.redd.it/hc6pqjd5izy21.jpg?width=960&amp;crop=smart&amp;auto=webp&amp;s=5dc85c8d8eba299e3971ce6124dcff2589f15fd3",
                  "width": 960,
                  "height": 1706
                },
                {
                  "url": "https://preview.redd.it/hc6pqjd5izy21.jpg?width=1080&amp;crop=smart&amp;auto=webp&amp;s=7041ebcdfcc0049eb19cecfa9d900704a36ab919",
                  "width": 1080,
                  "height": 1920
                }
              ],
              "variants": {},
              "id": "FEWU--5hyfk45usdmISrPlsH6TkvxFlh8MnM79AZ1J4"
            }
          ],
          "enabled": true
        },
        "all_awardings": [
          {
            "is_enabled": true,
            "count": 1,
            "subreddit_id": null,
            "description": "Gold Award",
            "coin_reward": 100,
            "icon_width": 512,
            "icon_url": "https://www.redditstatic.com/gold/awards/icon/gold_512.png",
            "days_of_premium": 7,
            "icon_height": 512,
            "resized_icons": [
              {
                "url": "https://www.redditstatic.com/gold/awards/icon/gold_16.png",
                "width": 16,
                "height": 16
              },
              {
                "url": "https://www.redditstatic.com/gold/awards/icon/gold_32.png",
                "width": 32,
                "height": 32
              },
              {
                "url": "https://www.redditstatic.com/gold/awards/icon/gold_48.png",
                "width": 48,
                "height": 48
              },
              {
                "url": "https://www.redditstatic.com/gold/awards/icon/gold_64.png",
                "width": 64,
                "height": 64
              },
              {
                "url": "https://www.redditstatic.com/gold/awards/icon/gold_128.png",
                "width": 128,
                "height": 128
              }
            ],
            "days_of_drip_extension": 0,
            "award_type": "global",
            "coin_price": 500,
            "id": "gid_2",
            "name": "Gold"
          },
          {
            "is_enabled": true,
            "count": 2,
            "subreddit_id": null,
            "description": "Silver Award",
            "coin_reward": 0,
            "icon_width": 512,
            "icon_url": "https://www.redditstatic.com/gold/awards/icon/silver_512.png",
            "days_of_premium": 0,
            "icon_height": 512,
            "resized_icons": [
              {
                "url": "https://www.redditstatic.com/gold/awards/icon/silver_16.png",
                "width": 16,
                "height": 16
              },
              {
                "url": "https://www.redditstatic.com/gold/awards/icon/silver_32.png",
                "width": 32,
                "height": 32
              },
              {
                "url": "https://www.redditstatic.com/gold/awards/icon/silver_48.png",
                "width": 48,
                "height": 48
              },
              {
                "url": "https://www.redditstatic.com/gold/awards/icon/silver_64.png",
                "width": 64,
                "height": 64
              },
              {
                "url": "https://www.redditstatic.com/gold/awards/icon/silver_128.png",
                "width": 128,
                "height": 128
              }
            ],
            "days_of_drip_extension": 0,
            "award_type": "global",
            "coin_price": 100,
            "id": "gid_1",
            "name": "Silver"
          }
        ],
        "media_only": false,
        "link_flair_template_id": "88927072-866c-11e5-90ae-0ef262798f47",
        "can_gild": false,
        "spoiler": false,
        "locked": false,
        "author_flair_text": null,
        "visited": false,
        "num_reports": null,
        "distinguished": null,
        "subreddit_id": "t5_2ugf9",
        "mod_reason_by": null,
        "removal_reason": null,
        "link_flair_background_color": "",
        "id": "bq4vvg",
        "is_robot_indexable": true,
        "report_reasons": null,
        "author": "Hillshurt",
        "num_crossposts": 10,
        "num_comments": 787,
        "send_replies": true,
        "whitelist_status": "all_ads",
        "contest_mode": false,
        "mod_reports": [],
        "author_patreon_flair": false,
        "author_flair_text_color": null,
        "permalink": "/r/instantkarma/comments/bq4vvg/pretty_instant_karma/",
        "parent_whitelist_status": "all_ads",
        "stickied": false,
        "url": "https://i.redd.it/hc6pqjd5izy21.jpg",
        "subreddit_subscribers": 519426,
        "created_utc": 1558191612,
        "media": null,
        "is_video": false
      }
    },
    {
      "kind": "t3",
      "data": {
        "approved_at_utc": null,
        "subreddit": "wholesomememes",
        "selftext": "",
        "author_fullname": "t2_2x3b7kyx",
        "saved": false,
        "mod_reason_title": null,
        "gilded": 0,
        "clicked": false,
        "title": "A Librarian Discusses Their Job",
        "link_flair_richtext": [],
        "subreddit_name_prefixed": "r/wholesomememes",
        "hidden": false,
        "pwls": 6,
        "link_flair_css_class": null,
        "downs": 0,
        "thumbnail_height": 78,
        "hide_score": false,
        "name": "t3_bq60pq",
        "quarantine": false,
        "link_flair_text_color": "dark",
        "author_flair_background_color": null,
        "subreddit_type": "public",
        "ups": 11482,
        "total_awards_received": 0,
        "media_embed": {},
        "thumbnail_width": 140,
        "author_flair_template_id": null,
        "is_original_content": false,
        "user_reports": [],
        "secure_media": null,
        "is_reddit_media_domain": true,
        "is_meta": false,
        "category": null,
        "secure_media_embed": {},
        "link_flair_text": null,
        "can_mod_post": false,
        "score": 11482,
        "approved_by": null,
        "thumbnail": "https://b.thumbs.redditmedia.com/lDq3PACBnEiJQ68bUwasnvmyyLil16pu2BXUafMqxEI.jpg",
        "edited": false,
        "author_flair_css_class": null,
        "author_flair_richtext": [],
        "gildings": {},
        "post_hint": "image",
        "content_categories": null,
        "is_self": false,
        "mod_note": null,
        "created": 1558226775,
        "link_flair_type": "text",
        "wls": 6,
        "banned_by": null,
        "author_flair_type": "text",
        "domain": "i.redd.it",
        "selftext_html": null,
        "likes": null,
        "suggested_sort": null,
        "banned_at_utc": null,
        "view_count": null,
        "archived": false,
        "no_follow": false,
        "is_crosspostable": false,
        "pinned": false,
        "over_18": false,
        "preview": {
          "images": [
            {
              "source": {
                "url": "https://preview.redd.it/okox7xj210z21.png?auto=webp&amp;s=d8e4fd7a6e8e9a190207d9062714c0fcda5269dd",
                "width": 1440,
                "height": 808
              },
              "resolutions": [
                {
                  "url": "https://preview.redd.it/okox7xj210z21.png?width=108&amp;crop=smart&amp;auto=webp&amp;s=b5ededcf897cafd35912f87adfe03e6cedcbd600",
                  "width": 108,
                  "height": 60
                },
                {
                  "url": "https://preview.redd.it/okox7xj210z21.png?width=216&amp;crop=smart&amp;auto=webp&amp;s=7eb32e3b9a37831c73868d3920b191aae819ae20",
                  "width": 216,
                  "height": 121
                },
                {
                  "url": "https://preview.redd.it/okox7xj210z21.png?width=320&amp;crop=smart&amp;auto=webp&amp;s=dbb8cdd342e92e5782db6f43e84b4a4565908307",
                  "width": 320,
                  "height": 179
                },
                {
                  "url": "https://preview.redd.it/okox7xj210z21.png?width=640&amp;crop=smart&amp;auto=webp&amp;s=97c90b4762c517fa21971c65fd30f1b7a687cd06",
                  "width": 640,
                  "height": 359
                },
                {
                  "url": "https://preview.redd.it/okox7xj210z21.png?width=960&amp;crop=smart&amp;auto=webp&amp;s=a05321bccf8568f79cb83928c86cdfd64cb28d77",
                  "width": 960,
                  "height": 538
                },
                {
                  "url": "https://preview.redd.it/okox7xj210z21.png?width=1080&amp;crop=smart&amp;auto=webp&amp;s=5ddea3fae85854d2d3a5ed8746541d6d4f9fb838",
                  "width": 1080,
                  "height": 606
                }
              ],
              "variants": {},
              "id": "KCtWGkOBecZUDG2Xsg5VuEtbjbtR9W3k_ZmEkbK5lwo"
            }
          ],
          "enabled": true
        },
        "all_awardings": [],
        "media_only": false,
        "can_gild": false,
        "spoiler": false,
        "locked": false,
        "author_flair_text": null,
        "visited": false,
        "num_reports": null,
        "distinguished": null,
        "subreddit_id": "t5_3gcwj",
        "mod_reason_by": null,
        "removal_reason": null,
        "link_flair_background_color": "",
        "id": "bq60pq",
        "is_robot_indexable": true,
        "report_reasons": null,
        "author": "Panzermoosen",
        "num_crossposts": 1,
        "num_comments": 68,
        "send_replies": true,
        "whitelist_status": "all_ads",
        "contest_mode": false,
        "mod_reports": [],
        "author_patreon_flair": false,
        "author_flair_text_color": null,
        "permalink": "/r/wholesomememes/comments/bq60pq/a_librarian_discusses_their_job/",
        "parent_whitelist_status": "all_ads",
        "stickied": false,
        "url": "https://i.redd.it/okox7xj210z21.png",
        "subreddit_subscribers": 4333457,
        "created_utc": 1558197975,
        "media": null,
        "is_video": false
      }
    }
  ];
  data: Array<Object> = map(
    this.values,
    val => {
      return pick(val.data, ['subreddit', 'author_fullname', 'title', 'subreddit_name_prefixed', 'thumbnail', 'preview', 'id', 'url', 'permalink']);
    });

  constructor() {
    // getHomePage()
    //   .then(result => this.data = result.data.data.children)
    //   .catch(error => console.log(error));
  }

  ngOnInit() {
    console.log(this.data);
  }

}
